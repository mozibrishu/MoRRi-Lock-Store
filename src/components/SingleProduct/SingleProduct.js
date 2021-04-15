import React from 'react';

const SingleProduct = (props) => {
    const { _id, name, price, imageURL } = props.product;
    return (
        <tr>
            <td>{name}</td>
            <td>${price || 0}</td>
            <td><button className="btn btn-danger">Delete</button></td>
        </tr>
    );
};

export default SingleProduct;