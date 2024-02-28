// AddTransaction.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddTransaction() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [transactionType, setTransactionType] = useState('IN');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/products/');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/transactions/', {
        product: selectedProduct,
        transaction_type: transactionType,
        quantity: parseInt(quantity)
      });
      setSelectedProduct('');
      setTransactionType('IN');
      setQuantity('');
      alert('Transacción agregada exitosamente');
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

  return (
    <div>
      <h2>Agregar Transacción</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Producto:
          <select value={selectedProduct} onChange={e => setSelectedProduct(e.target.value)}>
            <option value="">Seleccione un producto</option>
            {products.map(product => (
              <option key={product.id} value={product.id}>{product.name}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Tipo de Transacción:
          <select value={transactionType} onChange={e => setTransactionType(e.target.value)}>
            <option value="IN">Entrada</option>
            <option value="OUT">Salida</option>
          </select>
        </label>
        <br />
        <label>
          Cantidad:
          <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} />
        </label>
        <br />
        <button type="submit">Agregar Transacción</button>
      </form>
    </div>
  );
}

export default AddTransaction;
