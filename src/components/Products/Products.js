import React from 'react'
import {Grid} from '@material-ui/core'
import ProductItem from './ProductItem'

const products = [
    {id:1, 
    name:"item1", 
    description: "This is Item1 description.", 
    price:"$5",
    image:"https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
    },

    {id:1, 
    name:"item2", 
    description: "This is Item2 description.", 
    price:"$10",
    image:"https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
    }
];

const Products = (props) => {
    return (
        <main>
            <Grid container justify='center' spacing={4}>
                {products.map((product)=>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <ProductItem product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products
