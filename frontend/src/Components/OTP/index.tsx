import React, { useEffect, useRef, useState } from "react";
import type { ChangeEvent, KeyboardEvent, ClipboardEvent, RefObject } from "react";

interface OtpField {
  id: number;
  value: string;
}

interface InputFieldProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  onPaste: (e: ClipboardEvent<HTMLInputElement>) => void;
  inputRef: RefObject<HTMLInputElement | null>;
  inputType:string;
}


function InputField({ value, onChange, onKeyDown, onPaste, inputRef,inputType }: InputFieldProps) {

    return (
    <input
      ref={inputRef}
      type={inputType}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onPaste={onPaste}
      maxLength={1}
      inputMode="numeric"
      pattern="[0-9]*"
      style={{
        width: 40,
        height: 48,
        textAlign: "center",
        fontSize: 20,
        border: "1px solid #ccc",
        borderRadius: 6,
        outline: "none",
      }}
    />
  );
}

interface OtpScreenProps {
  rFileds?: number;
}

export default function OtpScreen({ rFileds = 6 }: OtpScreenProps) {
  const [fields, setFields] = useState<OtpField[]>([]);
  const [show,setShow] = useState(false);
  const inputRefs = useRef<RefObject<HTMLInputElement | null>[]>([]);

  useEffect(() => {
    const numberofInputFields: OtpField[] = [];
    for (let i = 0; i < rFileds; i++) {
      numberofInputFields.push({ id: i, value: "" });
    }
    setFields(numberofInputFields);
    inputRefs.current = numberofInputFields.map(() => React.createRef<HTMLInputElement>());
  }, [rFileds]);

  const focusInput = (index: number) => {
    inputRefs.current[index]?.current?.focus();
  };

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const digit = rawValue.replace(/[^0-9]/g, "").slice(-1); // keep last digit only

    setFields((prev) =>
      prev.map((field, i) => (i === index ? { ...field, value: digit } : field))
    );

    if (digit && index < rFileds - 1) {
      focusInput(index + 1);
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (fields[index]?.value) {
        setFields((prev) =>
          prev.map((field, i) => (i === index ? { ...field, value: "" } : field))
        );
      } else if (index > 0) {
        setFields((prev) =>
          prev.map((field, i) => (i === index - 1 ? { ...field, value: "" } : field))
        );
        focusInput(index - 1);
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      focusInput(index - 1);
    } else if (e.key === "ArrowRight" && index < rFileds - 1) {
      focusInput(index + 1);
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/[^0-9]/g, "").slice(0, rFileds);

    setFields((prev) =>
      prev.map((field, i) => ({
        ...field,
        value: pasted[i] || "",
      }))
    );

    const nextIndex = Math.min(pasted.length, rFileds - 1);
    focusInput(nextIndex);
  };

  const otpValue = fields.map((f) => f.value).join("");

  return (
    <div>
      <div style={{ display: "flex", gap: 8 }}>
        {fields.map((field, index) => (
          <InputField
            key={field.id}
            value={field.value}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            inputType = {show?'text':'password'}
            inputRef={inputRefs.current[index]}
          />
        ))}
      <button onClick={()=>setShow(!show)}>{!show ?'show':'hide'}</button>
      </div>
      <p style={{ marginTop: 12 }}>OTP: {show?otpValue:'******'}</p>
    </div>
  );
}