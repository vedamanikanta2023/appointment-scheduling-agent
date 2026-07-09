import { useLayoutEffect, useRef,useState } from "react";

export function Example() {
  const [inputs, setInputs] = useState([]);

  const handleOnclick =(key:string)=> {
    const filtered = inputs.filter(input=>input!==key);
    setInputs(filtered);
  }

  console.log(inputs)
  
  return (
    <div>
      <Parent />
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

function Parent() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return<>
  <Reffing/>
  <p>{count}</p>
  <Child onClick={increment} />
  </> ;
}

function Child({ onClick }:{onClick:React.DOMAttributes<HTMLButtonElement>}) {
  return <button onClick={onClick}>Increment 99999</button>;
}

function Reffing() {
  const boxRef = useRef();
  
  useLayoutEffect(() => {
    console.log(boxRef.current.offsetWidth);
  }, []);

  return <div ref={boxRef}>Hello</div>;
}