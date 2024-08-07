import React from "react";

interface GreetingProps {
  name?: string;
}

interface GreetingState {
  message: string;
}

export default class Greeting extends React.Component<
  GreetingProps,
  GreetingState
> {
  constructor(props: GreetingProps) {
    super(props);
    this.state = {
      // message: `Hello from, ${props.name}`,
      message: Greeting.getNewMessage(props.name),
    };
  }

  state: GreetingState;

  static getDerivedStateFromProps(props: GreetingProps, state: GreetingState) {
    console.log(props, state);
    if (props.name && props.name !== state.message) {
      const NewState = { ...state };
      NewState.message = Greeting.getNewMessage(props.name);
      return NewState;
    }
    return state;
  }
  static getNewMessage(name: string = "") {
    return `Hello from, ${name}`;
  }

  render() {
    console.log("rendering Greeting");
    if (!this.props.name) {
      return <div>no name given</div>;
    }
    return <div>{this.state.message}</div>;
  }
}
