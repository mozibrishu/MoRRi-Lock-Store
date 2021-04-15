import React from 'react';

const OrderProduct = (props) => {
    const { name, price,orderTime } = props.order;

    return (
        <tr>
            <td>{name}</td>
            <td>${price}</td>
            <td>{(new Date(orderTime).toLocaleString())}</td>
        </tr>
    );
};

export default OrderProduct;