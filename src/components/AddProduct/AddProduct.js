import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit} = useForm();
    const [imageURL, setIMageURL] = useState(null);


    const onSubmit = (data,e) => {
        e.target.reset();
        const productData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        };

        const url = `http://localhost:5000/addProduct`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => console.log('server side response', res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'b5ec491a3bbb613ffbae17a8e70d103c');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <form className="m-5" onSubmit={handleSubmit(onSubmit)}>

                <input name="name" className="form-control" placeholder="Enter Name" required {...register("name")} />
                <br />
                <input name="Price" className="form-control" placeholder="Enter Price" required {...register("price")} />
                <br />
                <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                <br />
                <br />
                <input type="submit" className="btn btn-primary" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;