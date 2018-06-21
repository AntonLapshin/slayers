import React from 'react';
import PropTypes from 'prop-types';
import './Unit.css';
import home from './images/home.png';
import tree from './images/tree.png';
import tower from './images/tower.png';
import unit1 from './images/unit1.png';
import unit2 from './images/unit2.png';
import unit3 from './images/unit3.png';
import unit4 from './images/unit4.png';
import star from './images/star.png';

export const Unit = props => {
    const { data } = props;
    const className = 'unit ' + data.type;
    return (
        <React.Fragment>
            <img key="0" className={className} src={Unit.types[data.type]} />
            {data.exp &&
                new Array(data.exp).fill(1).map((v, i) => (
                    <img key={i} className={'star star' + i} src={star} />
                ))}
        </React.Fragment>
    );
};

Unit.types = {
    home,
    tree,
    tower,
    unit1,
    unit2,
    unit3,
    unit4
};

Unit.propTypes = {
    data: PropTypes.object.isRequired
};
