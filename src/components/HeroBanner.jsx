import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const HeroBanner = () => {
  return (
    <Container fluid className="p-0">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.vecteezy.com/system/resources/previews/034/082/542/large_2x/mixed-ice-cream-scoops-in-bowl-with-fresh-fruits-berries-and-chocolate-candies-ai-generative-photo.jpg"
            alt="Ice Cream 1"
            height="500"
            style={{ objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <p>Amazing mix of fruits and scoops!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2021/06/29160302/Ice-cream-flavours-Hero-Image-min-1600x718.jpg?tr=w-1600"
            alt="Ice Cream 2"
            height="500"
            style={{ objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <p>Enjoy our seasonal fruit combo flavors!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
          src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/04/shutterstock_412798417-1.jpg?resize=1250,1120"
            alt="Ice Cream 3"
            height="550"
            style={{ objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <p>Rich and creamy chocolate fudge goodness!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default HeroBanner;


