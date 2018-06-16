import React from 'react';
import PropTypes from 'prop-types';
import './Cell.css';

const width = 30;
const height = 30;
const sizeHalf = width / 2;
const adjustY = width / 10;

export const Cell = props => {
    const { x, y } = props;
    const style = {
        left: x * width + 1 * x + (y % 2 === 1 ? sizeHalf : 0) + 'px',
        top: y * height - adjustY * y + 'px'
    };
    return (
        <div className="cell" style={style}>
          {/* <div className="before"><div className="texture" /></div> */}
          {/* <div className="after"><div className="texture" /></div> */}
          {/* <div className="texture" /> */}
        </div>
    );
};

Cell.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
};
