import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const ItemCounter = ({ onAdd, stock, initial }) => {
    const [count,setCount] = useState(typeof initial === 'number' ? initial : 0)
    const handleIncreaseCount = () =>{
        if (stock>count){
            setCount(prev => prev + 1)//puedo seguir agregando productos
        }
        
    }

    const handleDecreaseCount = () => {
        if (count> 1){
            setCount(prev => prev - 1)//puedo seguir restando productos
        }
    }
    const handleAdd = () =>{
        onAdd(count)
        setCount(initial) 
    }
    return(
        <>  
            <Card>
            <Card.Text onClick={handleDecreaseCount}>-</Card.Text>
            <input value = {count}/>
            <Card.Text onClick={handleIncreaseCount}>+</Card.Text>
            </Card>
            <Button onClick={handleAdd}>Agregar al carrito</ Button>
        </>
    )
}