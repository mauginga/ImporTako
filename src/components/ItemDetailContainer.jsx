import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import {getFirestore, getDoc, doc} from "firebase/firestore";

import { ItemDetail } from './ItemDetail';



export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const {id} = useParams();

        useEffect(()=>{
        const db = getFirestore();

        const refDoc = doc(db, "items", id);

        getDoc(refDoc).then((snapshot)=>{
            if(snapshot.exists()) {
            setItem({id: snapshot.id, ...snapshot.data()});
            } else {
                console.log(" NO HAY DOCS!")
            }
        });
    },[id]); //este Metodo es para el detalle de un DOC

    return (
    <Container className='mt-5'>
        {item ? <ItemDetail item = {item}/> : <>Loading ...</>}
    </Container>
    )
};