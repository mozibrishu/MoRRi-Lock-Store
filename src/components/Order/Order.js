import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderProduct from '../OrderProduct/OrderProduct';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://morri-lock-store.herokuapp.com/orders?email='+loggedInUser.email, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setOrders(data));
    }, [])
    return (
        <div>
            <h1 className="text-center">{loggedInUser.displayName}'s Orders</h1>
            <table className="container table">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Order Time</th>
                    </tr>
                </thead>
                <tbody>
                {
                    orders.map(order => <OrderProduct order={order}></OrderProduct>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default Order;