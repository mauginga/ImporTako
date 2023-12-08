import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CartContext } from '../contexts/CartContext';



const initialValues = {
    name: '',
    phone: '',
    email: '',
}
function CheckOut() {
    const {items,clear} = useContext(CartContext)
    const [comprador, setComprador] = useState(initialValues);

    const sendOrder =(event)=>{
        if (!comprador.name || !comprador.phone || !comprador.email) {
            alert("Por favor, completa todos los campos del formulario antes de enviar.")
            return;
        }
        event.preventDefault()
        const total = items.reduce((acc,item)=>acc+item.price,0)
        const order = {
            comprador,
            items,
            total
        }
        const db = getFirestore()
        const orderCollection = collection(db,"orders")
        addDoc(orderCollection,order).then(({id})=>{
            if(id){
                alert("La orden " +""  +id+ "" + " se realizo con exito")
                setComprador(initialValues)
                clear()
            }
        })
    }
    return (
        <Form style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{fontSize:'1em',fontFamily:'Cochin'}} >Email address:</Form.Label>
                <Form.Control style={{fontSize:'1em',marginLeft:'.5em'}} type="email" placeholder="Enter email" value={comprador.email} onChange={e => setComprador({ ...comprador, email: e.target.value })} required/>

                {/* onChange={handleChange} name='email'       */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{fontSize:'1em',fontFamily:'Cochin'}} >Name:</Form.Label>

                <Form.Control style={{fontSize:'1em',marginLeft:'.5em'}} type="text" placeholder="Your Name" value={comprador.name} onChange={e => setComprador({ ...comprador, name: e.target.value })} required/>
                {/* onChange={handleChange} name='Name'       */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{fontSize:'1em',fontFamily:'Cochin'}}>Phone:</Form.Label>
                <Form.Control style={{fontSize:'1em',marginLeft:'.5em'}} type="number" placeholder="+54" value={comprador.phone} onChange={e => setComprador({ ...comprador, phone: e.target.value })} required/>

                {/* onChange={handleChange} name='phone'       */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group>
            <Button variant="primary"  type='submit' onClick={sendOrder} style={{padding:'1em',borderRadius:'10px',backgroundColor:'black',marginTop:'.5em',cursor:'pointer'}}>
                Enviar
            </Button>
        </Form>
    );
}


export default CheckOut;
