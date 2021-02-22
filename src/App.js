import React, { Component } from "react";
import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Section from "./components/Section/Section";
import Cart from "./components/Cart/Cart";
import products from "./db/product.json";

class App extends Component {
  state = {
    isCartOpen: false,
    order: [],
    productsList: products,
    // total: 0,
  };

  cartToogle = () => {
    this.setState({ isCartOpen: !this.state.isCartOpen });
  };

  total = () => {
    const result = this.state.order.reduce((sum, product) => {
      return sum + product.price*product.quantity;
    }, 0);
    return result;
    // this.setState({ total: result.toFixed(2) });
  };

  addToCart = async (id) => {
    const orderItem = this.state.order.find((el) => el.id === id);

    const productItem = this.state.productsList.find((el) => el.id === id);

    await this.setState((prevState) => ({
      order: orderItem
        ? this.state.order.map((el) =>
            el.id === id ? { ...el, quantity: el.quantity + 1 } : el
          )
        : [...prevState.order, { ...productItem, quantity: 1 }],
    }));

    // this.total();
  };
  removeFromCart = async (id) =>{
    const result = this.state.order.filter(el=> el.id !== id);
    this.setState({order: result})
  //  this.total();

  }

  render() {
    const { isCartOpen, order, productsList, total } = this.state;
    return (
      <>
        <Header />
        <Main addToCart={this.addToCart} />
        <Cart
          statusCart={isCartOpen}
          cartToogle={this.cartToogle}
          removeFromCart={this.removeFromCart}
          order={order}
          total={this.total()}
        />
        {/* <Counter title="We test our counter"/> */}
      </>
    );
  }
}

export default App;

// import React from "react";
// import Counter from "./components/Counter/Counter";
// import Header from "./components/Header/Header";
// import Main from "./components/Main/Main";
// import Section from "./components/Section/Section";
// import Cart from "./components/Cart/Cart"

// const App = () => {
//   return (
// <>
//   <Header />
//   <Main />
//   <Cart />
//   {/* <Counter title="We test our counter"/> */}
// </>
//   );
// };

// export default App;
