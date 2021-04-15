import React, { useState } from 'react';
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';


const Admin = () => {
    const [addProductClicked, setAddProductClicked] = useState(true);

    return (
        <div className="d-flex container justify-content-around">
            <div className="Navigation col-12 col-md-3 my-5">
                <div className="add-product-click mb-3" onClick={() => setAddProductClicked(true)}>Add Product</div>
                <div className="manage-product-click" onClick={() => setAddProductClicked(false)}>Manage Product</div>
            </div>
            <div className="col-12 col-md-9">
                {addProductClicked ? <AddProduct></AddProduct> : <ManageProduct></ManageProduct>}
            </div>
            
        </div>
    );
};

export default Admin;