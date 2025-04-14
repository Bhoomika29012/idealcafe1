import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const PopularDishes = () => {
  const dishes = [
    {
      name: 'Gadbad Ice Cream',
      description: 'A mix of flavors, fruits, and jelly in one tall glass!',
      image: 'https://foodiesterminal.com/wp-content/uploads/2019/07/gadbad-ice-cream-recipe-mangalore-style.jpg',
    },
    {
      name: 'Ideal Special Sundae',
      description: 'Scoops of joy with chocolate and nuts!',
      image: 'https://hips.hearstapps.com/hmg-prod/images/dsc03299-sc-1623764031.jpeg?crop=0.550xw:0.823xh;0.221xw,0.161xh&resize=640:*',
    },
    {
      name: 'Mango Mastani',
      description: 'Thick mango milkshake topped with ice cream.',
      image: 'https://www.scratchingcanvas.com/wp-content/uploads/2019/06/Mango-Mastani.1.jpg',
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">🍨 Popular Dishes</h2>
      <Row>
        {dishes.map((dish, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4 d-flex align-items-stretch">
            <Card className="shadow-sm w-100">
              <Card.Img variant="top" src={dish.image} height="400" style={{ objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{dish.name}</Card.Title>
                <Card.Text>{dish.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PopularDishes;
