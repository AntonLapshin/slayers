import React from 'react';
import PropTypes from 'prop-types';
import './Cell.css';
import noise from '../../img/noise.png';

const width = 31;
const height = 35;

export const Cell = props => {
    const { x, y } = props;
    const style = {
        left: x * width + 'px',
        top: y * height + 1 * y + (x % 2 === 1 ? height / 2 : 0) + 'px'
    };
    return (
        <div className="cell color2" style={style}>
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="35"
                viewBox="0 0 40 34.64101615137754"
                style={{
                    filter: 'drop-shadow(rgba(0, 0, 0, 0.3) 0px 0px 10px)'
                }}
            >
                <defs>
                    <pattern
                        id="grass"
                        x="0"
                        y="0"
                        height="50"
                        width="50"
                        patternUnits="userSpaceOnUse"
                        dangerouslySetInnerHTML={{
                            __html: `<image x="0" y="0" width="50px" height="50px" xlink:href="${noise}" />`
                        }}
                    />
                </defs>
                <path
                    fill="url(#grass)"
                    d="M0 17.32050807568877L10 0L30 0L40 17.32050807568877L30 34.64101615137754L10 34.64101615137754Z"
                />
                <path
                    className="color"
                    d="M0 17.32050807568877L10 0L30 0L40 17.32050807568877L30 34.64101615137754L10 34.64101615137754Z"
                />                
            </svg>
        </div>
    );
};

Cell.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
};
