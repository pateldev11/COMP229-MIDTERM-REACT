// src/AddProduct.js
import React, { useState } from 'react';
import './index.css'

function AddProduct() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    quantity: '',
    category:'',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    alert(JSON.stringify(product, null, 2));
    console.log(product);
  };
  const handleCancel = () => {
    
    setProduct({
      name: '',
      price: '',
      description: '',
    });
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form>
        <div>
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="price">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={product.quantity}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="price">Category</label>
          <input
            type="name"
            id="category"
            name="category"
            value={product.category}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
        <button type="cancel" onClick={handleCancel}>
          cancel
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
