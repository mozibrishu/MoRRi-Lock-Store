import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    const { name, price } = props.product;
    return (
        <div className=" col-12 col-md-6 col-lg-4 mt-3 text-center product-card-container">
            <Link to={`/destination/${name}`}>
                <div className="product-card">
                    <h2>{name}</h2>
                    <h4>{price}</h4>
                </div>
            </Link>
        </div>
    );
};

export default Product;