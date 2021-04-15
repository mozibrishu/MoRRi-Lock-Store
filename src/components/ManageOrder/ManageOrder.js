import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleOrder from '../SingleOrder/SingleOrder';

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://morri-lock-store.herokuapp.com/allOrders')
            .then(response => response.json())
            .then(data => setOrders(data));
    }, [])

    return (
        <div>
            <table className="table container">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Order By</th>
                        <th scope="col">Time</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                {
                    orders.map(order => <SingleOrder order={order}></SingleOrder>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrder;