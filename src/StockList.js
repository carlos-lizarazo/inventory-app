// StockList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StockList() {
  const [stock, setStock] = useState([]);

  useEffect(() => {
    fetchStock();
  }, []);

  const fetchStock = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/stock/');
      setStock(response.data);
    } catch (error) {
      console.error('Error fetching stock:', error);
    }
  };

  return (
    <div>
      <h2>Lista de Existencias</h2>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad Disponible</th>
          </tr>
        </thead>
        <tbody>
          {stock.map(item => (
            <tr key={item.product_name}>
              <td>{item.product_name}</td>
              <td>{item.current_stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StockList;
