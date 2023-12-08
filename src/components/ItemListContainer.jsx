import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import {
    getFirestore,
    collection, 
    getDocs,
    query,
    where,
} from "firebase/firestore";


import { ItemList } from './ItemList';


export const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);

    const {id} = useParams();

            // metodo para traer la coleccion de Docs de Firebase
        useEffect(()=>{
            const db = getFirestore();

            const refCollection =  !id 
            ? collection(db, "items")
            : query(
                collection(db, "items"),
                where("category","==", id)
                );
            getDocs(refCollection).then((snapshot)=>{
                if(snapshot.size===0) console.log("NO HAY ITEMS");
                else
                setItems(
                    snapshot.docs.map((doc)=>{
                        return { id: doc.id, ...doc.data()};
                    })
                );
            });
        },[id]);


    return (
    <Container className='mt-5'>
        
        <h1> {props.greeting} </h1>

        {items ? <ItemList items = { items } />
         : <>Loading ..</> }

    </Container>
    )
};