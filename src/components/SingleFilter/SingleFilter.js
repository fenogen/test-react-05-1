import React from "react";
import PropTypes from 'prop-types';
import styles from './SingleFilter.module.css';



const SingleFilter = ({size}) => {
  // const {size} = props;
  return (
    <label className={styles.label}>
      <input className={styles.input} type="checkbox" value={size} />
      <span className={styles.checkmark}>{size}</span>
    </label>
  );
};

export default SingleFilter;


SingleFilter.propTypes = {
  size: PropTypes.string,
};