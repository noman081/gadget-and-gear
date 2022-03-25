import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Products from '../Products/Products';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    let [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handleAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
        // console.log(cart);
    }
    const [randomNum, setRandomNum] = useState(-1);
    const handleChoose = () => {
        const cartLength = cart.length;
        if (cartLength > 0) {
            const rand = Math.random();
            const random = Math.round(rand * (cartLength - 1));
            setRandomNum(random);
            console.log(randomNum);
        }
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Products key={product.id} product={product} handleAddToCart={handleAddToCart}></Products>)
                }
            </div>
            <div className="cart-container">
                <div className="cart-details">
                    <h3 className='order-title'>Order Details</h3>
                    {
                        cart.map(product => <Product key={product.id} product={product}></Product>)
                    }
                    <button className='choose-button' onClick={handleChoose}>Choose 1 for me</button>
                    {
                        randomNum >= 0
                            ? <Product product={cart[randomNum]}></Product>
                            : console.log(randomNum)
                    }
                </div>
            </div>
        </div >
    );
};

export default Shop;