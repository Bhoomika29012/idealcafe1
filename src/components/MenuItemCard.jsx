import React from 'react';
import { Card, Button } from 'react-bootstrap';

const MenuItemCard = ({ item, onAddToCart }) => {
  return (
    <Card className="m-2 shadow-sm" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} height="180" style={{ objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <h5>₹{item.price}</h5>
        <Button variant="success" onClick={() => onAddToCart(item)}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default MenuItemCard;
