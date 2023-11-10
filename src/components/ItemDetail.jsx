import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const ItemDetail = ({ item }) => {

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.pictureUrl} />
        <Card.Body>
          <Card.Title>{item.titule}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text>
              ${item.price}
          </Card.Text>
          <Link to = {`/category/${item.category}`}>
              <Button variant="primary">Main Category</Button>
          </Link>
        </Card.Body>
      </Card>
    );
};


