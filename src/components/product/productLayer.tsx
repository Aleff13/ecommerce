import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';

export interface ProductProps {
    id: number
    title: string
    price: string
    stock?: number
    img: string
    onClick?: () => void
}

const ProductLayer = ({ id, title, price, img, onClick }: ProductProps) => {

  return (
    <Card sx={{ display: 'flex' }}>
    <CardMedia
        component="img"
        sx={{ width: '40%' }}
        image={img}
        alt="echo-dot"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {price}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="add-to-cart">
            {/* TODO: Adicionar ação de click nesse icon */}
            <ShoppingCartIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
        </Box>
      </Box>

    </Card>
  );
}

export default ProductLayer
