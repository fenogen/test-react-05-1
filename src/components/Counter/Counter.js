import React, { useState } from "react";
import classes from "./Counter.module.css";

const initialState = {
  sum: 700,
  name: "Bob",
};

const zero = 0;

const Counter = ({ title }) => {
  const [count, setCount] = useState(zero);
  const [name, setName] = useState(title);
  const [adress, setAdress] = useState("Kyiv");

  const plus = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(zero);
  };
  const minus = () => {
    setCount(count - 1);
  };

  return (
    <div className={classes.Container}>
      <h1>{name}</h1>
      <div className={classes.Count}>{count}</div>

      <div>
        <button onClick={minus}>-</button>
        <button onClick={reset}>0</button>

        <button onClick={plus}>+</button>
      </div>
    </div>
  );
};

export default Counter;

// import React, { Component } from "react";
// import classes from "./Counter.module.css";

// class Counter extends Component {
//   // constructor(){
//   //   super();
//   //   this.state = {
//   //     count: 0,
//   //   }
//   //   this.plus =this.plus.bind(this)
//   // }

//   state = {
//     count: 0,
//     name: "Mar",
//     age: 25,
//   };
//   // plus = () => {
//   //   this.state.count = 30;
//   // }

//   plus =  () => {
//      this.setState((prevState) => ({ count: prevState.count + 1 }));
//     console.log(this.state.count);
//   };

//   reset = () => {
//     this.setState({ count: 0 });
//   };

//   // plus = () => {
//   //   // console.log(this.state.count);
//   //   this.setState({count: this.state.count + 1})
//   //   console.log(this.state.count);
//   // }

//   minus = () => {
//     this.setState((prevState) => ({ count: prevState.count - 1 }));
//   };

//   render() {
//     const { title } = this.props;
// return (
//   <div className={classes.Container}>
//     <h1>{title}</h1>
//     <div className={classes.Count}>{this.state.count}</div>

//     <div>
//       <button onClick={this.minus}>-</button>
//       {/* <button onClick={()=>console.log('hi')}>0</button> */}
//       <button onClick={this.reset}>0</button>

//       <button onClick={this.plus}>+</button>
//       {/* <button onClick={this.plus.bind(this)}>+</button> */}
//     </div>
//   </div>
// );
//   }
// }

// export default Counter;
