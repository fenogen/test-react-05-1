import React from "react";
import sizes from "../../db/sizes.json";
import SingleFilter from "../SingleFilter/SingleFilter";

// import "./FilterBlock.css";
import styles from './FilterBlock.module.css';
console.log(styles);

const FilterBlock = (props) => {
  return (
    <div className={styles.filters}>
      <h4 className={styles.title}>Sizes:</h4>
      <div className={styles["available-size"]}>
        {sizes.map((el) => (
          <SingleFilter key={el} size={el} />
        ))}
      </div>
      {props.children}
    </div>
  );
};

export default FilterBlock;
