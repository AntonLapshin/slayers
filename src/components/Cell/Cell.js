import React from "react";
import PropTypes from "prop-types";
import "./Cell.css";

const width = 40;
const height = 40;
const sizeHalf = width / 2;
const adjustY = width / 10;

export const Cell = props => {
  const { x, y } = props;
  const style = {
    left: x * width + 1 * x + (y % 2 === 1 ? sizeHalf : 0) + "px",
    top: y * height - adjustY * y + "px"
  };
  return <div className="cell" style={style} />;
};

Cell.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};
