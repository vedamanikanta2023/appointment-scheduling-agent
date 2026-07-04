import { useState } from "react";

export function Example() {
  const [inputs, setInputs] = useState([]);

  const handleOnclick =(key:string)=> {
    const filtered = inputs.filter(input=>input!==key);
    setInputs(filtered);
  }

  console.log(inputs)
  
  return (
    <div>
      <button
        onClick={() => {
          setInputs((p) => [...p, String(Math.random() * 10)]);
        }}
      >
        +
      </button>
      <br />
      {inputs.map((input)=>{
        return(<div key={input}><input />
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <button onClick={()=>handleOnclick(input)}>-</button></div>)
      })}
    </div>
  );
}
