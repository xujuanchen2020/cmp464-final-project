import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './ProductItem.css'

const ProductItem = ({product}) => {
    return (
        <Card className="root">
            <CardMedia 
            className="media" 
            image={product.image} 
            title={product.name}
            />
            <CardContent>
                <div className="cardContent">
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        {product.price}
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className="cardActions">
                <IconButton arial-label="add to cart">
                    <AddShoppingCartIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default ProductItem
