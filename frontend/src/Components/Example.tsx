import { useState } from "react";
interface InputType {id:number}
export function Example() {
  const [inputs, setInputs] = useState<InputType[]>([]);
  const [id, setId] = useState(1);

  const handleOnclick = (key: InputType) => {
    console.log(key);
    const filtered = inputs.filter((input) => input.id !== key.id);
    setInputs(filtered);
  };

  console.log(inputs, id);

  return (
    <div>
      <Parent />
      <button
        onClick={() => {
          setInputs((p) => {
            let previeos = [...p];
            previeos.push({ id: id });
            return previeos;
          });
          setId((p) => {
            return p + 1;
          });
        }}
      >
        +
      </button>
      <br />
      {inputs.map((input) => {
        return (
          <div key={input.id}>
            <p>{input.id}</p>
            <input />
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <button onClick={() => handleOnclick(input)}>-</button>
          </div>
        );
      })}
    </div>
  );
}

function Parent() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  return (
    <>
      <p>{count}</p>
      <Child onClick={increment} />
    </>
  );
}

function Child({
  onClick,
}: {
  onClick:  React.MouseEventHandler<HTMLButtonElement>;
}) {
  return <button onClick={onClick}>Increment 99999</button>;
}
