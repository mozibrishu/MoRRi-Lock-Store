import React from 'react';

const SingleOrder = (props) => {
    const {_id, name, price, displayName, orderTime} = props.order;

    function deleteOrder(event, id) {
        console.log(_id);
        fetch(`http://localhost:5000/deleteOrder/${id}`, {
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
            <td>{displayName}</td>
            <td>{(new Date(orderTime).toLocaleString("en-IN"))}</td>
            <td><button className="btn btn-danger" onClick={(event) => deleteOrder(event,`${_id}`)}>Delete</button></td>
        </tr>
    );
};

export default SingleOrder;