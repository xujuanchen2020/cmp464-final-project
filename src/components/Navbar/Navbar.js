import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import logo from '../../assets/cubic_logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
        <AppBar position="fixed" className="appBar" color="white">
            <Toolbar>
                <Typography>
                    <img src={logo} alt="Cubic., Inc" height="45px" className="image"/>
                    <span className="nav-title">Cubic., Inc</span>
                </Typography>
                <div className="grow"/>
                <div className="button"/>
                <IconButton aria-label="show cart items" color="inherit">
                    <Badge badgeContent={1} color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Navbar
