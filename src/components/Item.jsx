 
 import { Link } from 'react-router-dom';
 import Button from 'react-bootstrap/Button';
 import Card from 'react-bootstrap/Card';
 
 
 export const Item = ({item}) => {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.pictureUrl} style={{ width: 'auto' , height: '200px' }} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text>
                ${item.price}
            </Card.Text>
            <Link to = {`/items/${item.id}`}>
                <Button variant="primary">Select</Button>
            </Link>
          </Card.Body>
        </Card>
      );
 };
