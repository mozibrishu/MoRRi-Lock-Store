import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, [])
    console.log(products);
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                {
                    products.map(product => <SingleProduct product={product}></SingleProduct>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProduct;