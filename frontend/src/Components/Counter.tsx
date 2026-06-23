import React from "react";

interface CounterPropsType {
    number:number;
}

class Counter extends React.Component<CounterPropsType>{

    componentDidMount(): void {
    console.log("mounting component --> running");
  }
    componentDidUpdate(prevProps: Readonly<CounterPropsType>, prevState: Readonly<{}>, snapshot?: any): void {
        if(prevProps.number!==this.props.number){
            console.log('compnent did update runs');
        }
    }

    componentWillUnmount(): void {
        console.log('cmpnnt will unmount runs');
    }
    render(): React.ReactNode {
        return <h2>HI I'm Counter{this.props.number} Component</h2>
    }
}

export default Counter;