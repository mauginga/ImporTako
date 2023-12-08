import React,{ useContext } from "react";
import { Container, Table } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import { CartContext } from "../contexts/CartContext";
import CheckOut from "./CheckOut";

const Cart = () => {
    const {clear, items, onRemove} = useContext(CartContext);
    const Navigate = useNavigate();

    const total =  items.reduce((acc,valorActual)=>acc + valorActual.quantity * valorActual.price, 0)


    if (!items.length) {
        return (
        <Container>
        <div>Comprate algo BOTIJA!!!</div>
        <button onClick={()=>Navigate("/")} >Volver a Empezar</button>
        </Container>
        )
    }

    return (
        <Container className ="mt-4">
            <h1>Carrito</h1>
        <Table striped>
        <thead>
            <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Cantidad</th>
            <th>Eliminar</th>
            </tr>
        </thead>
        <tbody>
        {items?.map((item) => (
                        <tr  key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>
                            <img src={item.pictureUrl} style={{ width: 'auto' , height: '200px' }} alt="compras" />
                        </td>
                        <td>{item.quantity}</td>
                        <td onClick={()=>onRemove(item.id)} >X</td>
                        </tr>
            ))}
        </tbody>
        <tfoot>
                    <tr>
                        <td >Total:{total}</td>
                    </tr>
        </tfoot>
        </Table>
            <button onClick = {clear}>Vaciar Carrito</button>
            <CheckOut />
        </Container>
    )

};

export default Cart;