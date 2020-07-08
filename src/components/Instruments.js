import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CardDeck from "react-bootstrap/CardDeck";
import Col from "react-bootstrap/Col";

const Store = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Want to learn more about our instruments?</h1>
          <p>
            Explore the diverse sounds and tones our instruments offer. Click on
            the videos below to hear various songs played on our most popular
            instruments
          </p>
        </Container>
      </Jumbotron>
      <Image
        src="https://cdn.lynda.com/course/510645/510645-637286199849191063-16x9.jpg"
        fluid
      />
      <br />
      <br />

      <CardDeck>
        <Card>
          <Card.Body>
            <Card.Title>Piano</Card.Title>
            <Card.Text>
              <iframe
                width="450"
                height="315"
                src="https://www.youtube.com/embed/8Z5EjAmZS1o"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Guitar</Card.Title>
            <Card.Text>
              <iframe
                width="450"
                height="315"
                src="https://www.youtube.com/embed/T-U3c1nU3eM"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Flute</Card.Title>
            <Card.Text>
              <iframe
                width="450"
                height="315"
                src="https://www.youtube.com/embed/is68rlOzEio"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      <br />
      <br />
      <CardDeck>
        <Card>
          <Card.Body>
            <Card.Title>Clarinet</Card.Title>
            <Card.Text>
              <iframe
                width="450"
                height="315"
                src="https://www.youtube.com/embed/nuEMqMc1Fh4"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Trumpet</Card.Title>
            <Card.Text>
              <iframe
                width="450"
                height="315"
                src="https://www.youtube.com/embed/QcIp7K2UFgE"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Saxophone</Card.Title>
            <Card.Text>
              <iframe
                width="450"
                height="315"
                src="https://www.youtube.com/embed/XBWyE1v8--I"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Store;
