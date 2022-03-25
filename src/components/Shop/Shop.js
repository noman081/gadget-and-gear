import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])
    return (
        <div>
            <div className="product-container">
                <h2>Product</h2>
            </div>
            <div className="cart-container">

            </div>
        </div>
    );
};

export default Shop;