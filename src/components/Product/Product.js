import React from 'react';
import './Product.css';
const Product = (props) => {
    const { name, imgUrl } = props.product;
    return (
        <div className='order-info'>
            <img src={imgUrl} alt="" />
            <h3>{name}</h3>
            <button>Delete</button>
        </div>
    );
};

export default Product;