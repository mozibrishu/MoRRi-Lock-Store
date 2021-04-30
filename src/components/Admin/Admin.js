import React, { useState } from 'react';
import AddProduct from '../AddProduct/AddProduct';
import ManageOrder from '../ManageOrder/ManageOrder';
import ManageProduct from '../ManageProduct/ManageProduct';
import './Admin.css'

const Admin = () => {
    const [clicked, setClicked] = useState(1);

    return (
        <div className="d-flex container justify-content-around">
            <div className="Navigation col-12 col-md-3 my-5">
                <div className="cursorPointer mb-3" onClick={() => setClicked(1)}>Add Product</div>
                <div className="cursorPointer mb-3" onClick={() => setClicked(2)}>Manage Product</div>
                <div className="cursorPointer mb-3" onClick={() => setClicked(3)}>Manage All Order</div>
            </div>
            <div className="col-12 col-md-9">
                {clicked === 1 ? <AddProduct></AddProduct> : clicked === 2 ? <ManageProduct></ManageProduct> : <ManageOrder></ManageOrder>}
            </div>

        </div>
    );
};

export default Admin;