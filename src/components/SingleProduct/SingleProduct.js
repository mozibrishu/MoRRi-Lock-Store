import React from 'react';

const SingleProduct = (props) => {
    const { _id, name, price, imageURL } = props.product;

    function deleteProduct(event, id) {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    event.target.parentNode.parentNode.style.display = 'none';
                }
            })
    }

    return (
        <tr>
            <td>{name}</td>
            <td>${price || 0}</td>
            <td><button className="btn btn-danger" onClick={(event) => deleteProduct(event,`${_id}`)}>Delete</button></td>
        </tr>
    );
};

export default SingleProduct;