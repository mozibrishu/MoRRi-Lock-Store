import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const {_id,name,price} = product;
    useEffect(() => {
        fetch(`http://localhost:5000/product/${productId}`)
            .then(response => response.json())
            .then(data => setProduct(data));
    }, [])

    return (
        <div>
            <table className="table container">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Order</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>${price || 0}</td>
                        <td><button className="btn btn-warning">Order</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CheckOut;