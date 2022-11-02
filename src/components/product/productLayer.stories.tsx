import React from 'react';
import { action } from '@storybook/addon-actions';
import ProductLayer from './productLayer';


export default {
  component: ProductLayer,
  title: 'Product-layer',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const productData = {
  id: 1,
  title: 'Echo-dot',
  price: 'R$ 100,00',
  img: 'https://images-na.ssl-images-amazon.com/images/G/32/kindle/journeys/NDczM2MzZmYt/NDczM2MzZmYt-MTY3NzRhYmUt-w186._SY116_CB609203787_.jpg'
};

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

// export const Default = () => <ProductLayer product={{ ...productData }} {...actionsData} />;
export const Default = () => <ProductLayer { ...productData } {...actionsData} />;
