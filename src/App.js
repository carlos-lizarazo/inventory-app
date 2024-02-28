// App.js
import React from 'react';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import Transactions from './Transactions';
import AddTransaction from './AddTransaction';
import StockList from './StockList';

function App() {
  return (
    <div>
      <h1>Aplicación de Inventario</h1>
      <ProductList />
      <AddProduct />
      <Transactions />
      <AddTransaction />
      <StockList />
    </div>
  );
}

export default App;
