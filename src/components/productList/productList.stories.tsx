import React from 'react';
import ProductList from './productList';


export default {
  component: ProductList,
  title: 'Product-list',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const productData = [{
  id: 1,
  title: 'Echo-dot',
  price: 'R$ 100,00',
  img: 'https://images-na.ssl-images-amazon.com/images/G/32/kindle/journeys/NDczM2MzZmYt/NDczM2MzZmYt-MTY3NzRhYmUt-w186._SY116_CB609203787_.jpg'
},{
id: 2,
  title: 'Echo-dot-com-relógio',
  price: 'R$ 200,00',
    img: 'https://images-na.ssl-images-amazon.com/images/G/32/kindle/journeys/NDczM2MzZmYt/NDczM2MzZmYt-MmEzYjdlYmYt-w186._SY116_CB609203787_.jpg'
},{
    id: 1,
    title: 'Echo-buds',
    price: 'R$ 125,00',
    img: 'https://images-na.ssl-images-amazon.com/images/G/32/kindle/journeys/NDczM2MzZmYt/NDczM2MzZmYt-Y2IwZWEzNGUt-w186._SY116_CB609203787_.jpg'
  },{
  id: 2,
    title: 'Echo',
    price: 'R$ 70,00',
    img: 'https://images-na.ssl-images-amazon.com/images/G/32/kindle/journeys/NDczM2MzZmYt/NDczM2MzZmYt-MmVjNzk3Njgt-w186._SY116_CB607267914_.jpg'
  
  }];

export const Default = () => <ProductList products={productData} />;
