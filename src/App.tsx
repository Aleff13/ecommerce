import React from 'react';
//import './App.css';
import ProductList from './components/productList/productList';
import { productData } from './components/productList/productList.stories';

const App = () => {
  return (
    <ProductList products={productData}/>
  );
}

export default App;
