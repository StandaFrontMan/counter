import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      counter: 0,
    }
  }

  increm = () => {
    this.setState((state) => {
      return {counter: state.counter + 1}
    })
  }

  decrem = () => {
    this.setState((state) => {
      return {counter: state.counter - 1}
    })
  }

  toZero = () => {
    this.setState((state) => {
      return {counter: state.counter = 0}
    })
  }

  render () {
    return (
      <div>
        <h2>Counter is: {this.state.counter}</h2>
        <button onClick={this.increm}>Increment !!!</button>
        <button onClick={this.decrem}>Decrement !!!</button>
        <button onClick={this.toZero}>Counter to Zero !!!</button>
      </div>
    );
  }
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)








