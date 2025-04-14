import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ExclusiveOffers = () => {
  const offers = [
    {
      title: '🍧 Happy Hours',
      description: 'Get 50% off on all ice creams between 3-5 PM every day!',
    },
    {
      title: '🎉 Festival Special',
      description: 'Buy 2 Gadbad Ice Creams and get 1 free during festival week!',
    },
    {
      title: '🌞 Summer Coolers',
      description: 'Cool off with our special mango and watermelon chillers!',
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">🎉 Exclusive Offers</h2>
      <Row>
        {offers.map((offer, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4 d-flex align-items-stretch">
            <Card className="shadow-sm w-100 border-success">
              <Card.Body>
                <Card.Title>{offer.title}</Card.Title>
                <Card.Text>{offer.description}</Card.Text>
                <Button variant="success">Grab Offer</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ExclusiveOffers;
