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
          <h1>Need Some More Help?</h1>
          <p>
            Check out external resources below to help you on your musical
            journey
          </p>
        </Container>
      </Jumbotron>
      <Image
        src="https://www.colburnschool.edu/wp-content/uploads/2019/09/p_Connie-Sheu-01857_2600o.jpg"
        fluid
      />
      <br />
      <br />

      <CardDeck>
        <Card>
          <Card.Body>
            <Card.Title>Yousician</Card.Title>
            <Card.Text>
              <iframe
                width="450"
                height="315"
                src="https://www.youtube.com/embed/q9QNcCsWJPE"
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
            <Card.Title>Marty Music</Card.Title>
            <Card.Text>
              <iframe
                width="450"
                height="315"
                src="https://www.youtube.com/embed/rq2e7H4BxXA"
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
            <Card.Title>Piano Video Lessons</Card.Title>
            <Card.Text>
              <iframe
                width="450"
                height="315"
                src="https://www.youtube.com/embed/Jq4U50OiCog"
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
            <Card.Title>PHianonize</Card.Title>
            <Card.Text>
              <iframe
                width="450"
                height="315"
                src="https://www.youtube.com/embed/HygVEk9kJVs"
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
            <Card.Title>katieFlute</Card.Title>
            <Card.Text>
              <iframe
                width="450"
                height="315"
                src="https://www.youtube.com/embed/d1Ld9hCVlLM"
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
            <Card.Title>Pianote</Card.Title>
            <Card.Text>
              <iframe
                width="450"
                height="315"
                src="https://www.youtube.com/embed/BwoY7WIJ_es"
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
