import React from "react";
import CardCollection from "../CardCollection/CardCollection";
import FilterBlock from "../FilterBlock/FilterBlock";
import Section from "../Section/Section";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./Main.css";

const Main = ({addToCart}) => {
  return (
    <main className="main">
      <FilterBlock />
      <CardCollection addToCart={addToCart}/>
    </main>
  );
};

export default Main;
