import { Link } from 'react-router-dom';
import cart from '../assets/cart.png';
import { useContext } from 'react';

import { CartContext } from '../contexts/CartContext';



export const CartWidget = () => {
    const { items } = useContext(CartContext)
    
    const total =  items.reduce((acc,valorActual)=>acc + valorActual.quantity, 0)
    return (
        <Link to = "/cart">
            <img src = {cart} alt = "carrito" width = {30} />
            <span> {total} </span>
        </ Link>
    );

};