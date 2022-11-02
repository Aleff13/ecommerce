import React from 'react';
// import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ProductLayer from '../product/productLayer';

interface ProductListProps {
  products: {
    id: number
    title: string
    price: string
    stock?: number
    img: string
  }[]
}

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const ProductList = ({ products }: ProductListProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {products.map((product, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <ProductLayer id={product.id} price={product.price} title={product.title} img={product.img}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList