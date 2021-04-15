import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Home.css'

const Home = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div className="home-container pt-5">
            {products.length === 0 && <div className="text-center"><CircularProgress /></div>}

            <div className="d-flex container justify-content-around row align-items-center mx-auto w-100">
                {
                    products.map(product => <Product product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Home;

