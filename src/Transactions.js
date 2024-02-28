// Transactions.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/transactions/');
      setTransactions(response.data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  return (
    <div>
      <h2>Transacciones</h2>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>{transaction.product_name} - Tipo: {transaction.transaction_type} - Cantidad: {transaction.quantity}</li>
        ))}
      </ul>
    </div>
  );
}

export default Transactions;
