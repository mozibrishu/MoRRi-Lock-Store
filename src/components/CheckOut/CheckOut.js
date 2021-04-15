import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import { useHistory } from "react-router-dom";

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const { name, price } = product;
    let history = useHistory();


    useEffect(() => {
        fetch(`https://morri-lock-store.herokuapp.com/product/${productId}`)
            .then(response => response.json())
            .then(data => setProduct(data));
    }, [])


    const handleOrder = () => {
        const productData = {
            name,
            price,
            ...loggedInUser,
            orderTime: new Date()
        };
        console.log(productData);
        const url = `https://morri-lock-store.herokuapp.com/addOrder`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result) {
                    history.push("/order");
                }
            })
    }


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
                        <td>${price}</td>
                        <td><button className="btn btn-warning" onClick={() => handleOrder()}>Order</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CheckOut;