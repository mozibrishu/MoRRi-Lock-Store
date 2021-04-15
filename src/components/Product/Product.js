import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    const { name, price,imageURL } = props.product;
    return (
        <div className=" col-12 col-md-4 col-lg-3 mt-3 text-center product-card-container">

            <div className="product-card">
                <img className="productImage" src={imageURL} alt="" srcset=""/>
                <p>{name}</p>
                <h4>${price}</h4>
                <Link to={`/checkout`}>
                    <button className="btn btn-primary">Buy Now</button>
                </Link>
            </div>

        </div>
    );
};

export default Product;