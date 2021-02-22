import React from "react";
import products from "../../db/product.json";
import SingleCard from "../SingleCard/SingleCard";
import "./CardCollection.css";

const CardCollection = ({addToCart}) => {
  return (
    <div className="card-container">
      {/* <!-- cards header start --> */}
      <div className="card-container__header">
        <small className="products-found">
          <span>16 Product(s) found</span>
        </small>
        <div className="sort">
          Order by
          <select>
            <option value="">Select</option>
            <option value="low">Lowest to highest</option>
            <option value="high">Highest to lowest</option>
          </select>
        </div>
      </div>
      {/* <!-- cards header end  -->
    <!-- card start  --> */}
      <div className="card-block">
        {products.map((el) => (
          <SingleCard
            key={el.id}
            {...el}
            addToCart={addToCart}
            // style={el.style}
            // img={el.img}
            // currency={el.currencyFormat}
            // price={el.price}
            // title={el.title}
            // shipping={el.isFreeShipping}
            // type="primary"
          />
        ))}
        {/* <!-- card end  --> */}
      </div>
    </div>
  );
};

export default CardCollection;
