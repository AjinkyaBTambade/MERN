import React, { Component } from 'react';
 
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: props.likes };
  }
 
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
 
  render() {
    return (
      <div>
        <p>Likes: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
 
export default Counter;