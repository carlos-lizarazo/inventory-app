// AddProduct.js
import React, { useState } from 'react';
import axios from 'axios';

function AddProduct() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/products/', { name, quantity });
      setName('');
      setQuantity('');
      alert('Producto agregado exitosamente');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div>
      <h2>Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre del Producto:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Cantidad:
          <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} />
        </label>
        <br />
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  );
}

export default AddProduct;
