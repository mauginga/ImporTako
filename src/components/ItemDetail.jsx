import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';

import { ItemCounter } from './ItemCounter';
import { CartContext } from '../contexts/CartContext';

export const ItemDetail = ({ item }) => {
    const {onAdd} = useContext(CartContext)

    const add = (quantity) => {
        onAdd(item,quantity);
    }

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.pictureUrl} style={{ width: 'auto', height: '200px' }} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text>
              ${item.price}
          </Card.Text>
          <Link to = {`/category/${item.category}`}>
              <Button variant="primary">Main Category
              </Button>
          </Link>
          <Card.Text>{item.stock}</Card.Text>
          <ItemCounter onAdd ={add} stock ={item.stock} initial={1}/>
        </Card.Body>
      </Card>
    );
};


