import React from "react";
import "./CartItem.css";

const CartItem = ({img,title, style,price,currencyFormat,quantity,removeFromCart,id}) => {
  
  return (
    <div class="cart-item">
    <div onClick={()=>removeFromCart(id)} class="cart-item__del"></div>
    <div class="cart-item__thumb">
      <img
        src={img}
        alt={style}
      />
    </div>
    <div class="cart-item__details">
      <p class="title">{title}</p>
      <p class="desc">
        {style}
      </p>
      <p class="desc">Quantity: {quantity}</p>
    </div>
    <div class="cart-item__price">
      <p>{currencyFormat} {(price * quantity).toFixed(2)}</p>
      <button disabled="" class="change-product-button">-</button
      ><button class="change-product-button">+</button>
    </div>
  </div>
  );
};

export default CartItem;