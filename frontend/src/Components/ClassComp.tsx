import React from "react";
import Counter from "./Counter";
import Counter2 from "./Counter2";
import SearchBar from "./SearchBar";

class ClassComp extends React.Component<{}, { num: number }> {
  state = {
    num: 0,
  };

  componentDidMount(): void {
    // console.log("mounting component --> running");
  }

  handleClick() {
    this.setState((state) => ({
      num: state.num + 1,
    }));
  }

  render() {
    return (
      <>
        <SearchBar />
        <h1>Hi I'm Class Component</h1>
        <h1>....</h1>
        <Counter number={this.state.num} />
        <Counter2 number={this.state.num} />
        <button onClick={this.handleClick.bind(this)}>Increment</button>
      </>
    );
  }
}

export default ClassComp;
