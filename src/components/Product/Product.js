import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    const { product } = props;
    const { name, id, imgUrl, price } = product;
    return (
        <div className='product'>
            <img src={imgUrl} alt="" />
            <div className='product-info'>
                <p>{name}</p>
                <p>Price: ${price}</p>
            </div>
            <button className='btn-cart'>
                <p>Add to cart </p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;