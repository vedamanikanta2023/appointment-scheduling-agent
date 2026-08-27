import { useLayoutEffect, useState } from "react";
import "./Example.css"
interface InputType {id:number}

export function Example() {
  const [inputs, setInputs] = useState<InputType[]>([]);
  const [id, setId] = useState(1);

  const handleOnclick = (key: InputType) => {
    console.log(key);
    const filtered = inputs.filter((input) => input.id !== key.id);
    setInputs(filtered);
  };

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
      <ul>
        {inputs.map((input) => {
        return (
          <li key={input.id}>
            <p>{input.id}</p>
            <input />
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <button onClick={() => handleOnclick(input)}>-</button>
          </li>
        );
      })}
      </ul>
      
    </div>
  );
}

function Parent() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    debugger;
    console.log(count);
  };

  return (
    <>
    <img src="public\poto.jpg" alt="no image"/>
      <p>vedamaniaknta{count}</p>
      <Child onClick={increment} />
    </>
  );
}

function Child({
  onClick,
}: {
  onClick:  React.MouseEventHandler<HTMLButtonElement>;
}) {
  const [count,setCount]=useState(0);
   useLayoutEffect(() => {
    // debugger;
    setTimeout(function(){
      setCount('kjldsafjklasdf');
    },1000)
    // console.log(boxRef.current.offsetWidth);
  }, []);
  return <button onClick={onClick}>Increment {count}</button>;
}
