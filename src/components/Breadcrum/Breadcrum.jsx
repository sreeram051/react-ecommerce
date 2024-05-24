import React from 'react';
import arrow_icon from '../Assets/breadcrum_arrow.png';
import './Breadcrum.css';

const Breadcrum = (props) => {
    const { product } = props;
    return (
        <div className="breadcrum">
            <span>HOME</span>
            <img src={arrow_icon} alt="arrow icon" />
            <span>SHOP</span>
            <img src={arrow_icon} alt="arrow icon" />
            <span>{product.category}</span>
            <img src={arrow_icon} alt="arrow icon" />
            <span>{product.name}</span>
        </div>
    );
}

export default Breadcrum;