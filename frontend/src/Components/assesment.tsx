import React, { useEffect, useReducer } from "react";

type State = {
  price: number;
  color: "green" | "red" | any;
  do: boolean;
  r50: boolean;
};

type Action = { type: "TICK" };

function reducer(state: State, action: Action): State {
  if (action.type !== "TICK") return state;

  // Rising phase: price climbs to 50 in steps of 0.5, color green
  if (!state.r50) {
    if (state.price >= 50) {
      return { ...state, r50: true };
    }
    return { ...state, price: state.price + 0.5, color: "green" };
  }

  // Falling phase: price drops to 1 in steps of 1, color red
  if (state.price <= 1) {
    return { ...state, do: false, color: "grey" };
  }
  return { ...state, price: state.price - 1, color: "red" };
}

export default function Stock() {
  const [values, dispatch] = useReducer(reducer, {
    price: 0.5,
    color: "green",
    do: true,
    r50: false,
  });

  useEffect(() => {
    if (!values.do) return; // stop once "do" is false

    const id = setInterval(() => {
      dispatch({ type: "TICK" });
    }, 0.5 * 1000);

    return () => clearInterval(id);
  }, [values.do]);

  return (
<>
    <div
  style={{
    width: 20,
    height: 90,
    // backgroundColor: "yellow",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    // overflow: "hidden",
    position: "relative",
  }}
>
  <p
    style={{
        color:values.color,
    //   position: "absolute",
      top: -20,
      margin: 0,
      fontSize: 12,
    }}
  >
    {values.price}
  </p>
  <div
    style={{
      backgroundColor: values.color,
      height: `${Math.min((values.price / 50) * 100, 100)}%`,
      width: 10,
      transition: "height 0.4s ease, background-color 0.4s ease",
    }}
  ></div>
</div></>
  );
}
