import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const CustomerTestimonials = () => {
  const testimonials = [
    {
      name: 'Anusha D.',
      review: 'The Gadbad Ice Cream is my all-time favorite! So fresh and tasty.',
      rating: '⭐️⭐️⭐️⭐️⭐️',
    },
    {
      name: 'Rahul M.',
      review: 'Amazing ambiance and the desserts are to die for. Highly recommended!',
      rating: '⭐️⭐️⭐️⭐️',
    },
    {
      name: 'Sneha K.',
      review: 'Loved the variety and the quality of the ice creams. Will visit again!',
      rating: '⭐️⭐️⭐️⭐️⭐️',
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">💬 Customer Testimonials</h2>
      <Row>
        {testimonials.map((t, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4 d-flex align-items-stretch">
            <Card className="shadow-sm w-100">
              <Card.Body>
                <Card.Title>{t.name}</Card.Title>
                <Card.Text>"{t.review}"</Card.Text>
                <Card.Text className="text-warning">{t.rating}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CustomerTestimonials;
