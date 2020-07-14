import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CardDeck from "react-bootstrap/CardDeck";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

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
                src="https://www.youtube.com/embed/KwQf_rOUiO4"
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
      <br />
      <footer>
        <table style={{ width: "100%" }}>
          <tr>
            <th>Main Pages</th>
            <th>For Customers</th>
            <th>For Students</th>
            <th>Help</th>
          </tr>
          <tr>
            <Link to="/">
              <td>Home</td>
            </Link>
            <td>
              <Link to="/beginner">Beginner Collection</Link>
            </td>
            <td>
              <Link to="/lessons">Lessons</Link>
            </td>
            <td>P: 000 000 0000</td>
          </tr>
          <tr>
            <Link to="/store">
              <td>Buy</td>
            </Link>
            <td>
              <Link to="/intermediate">Intermediate Collection</Link>
            </td>
            <td>
              <Link to="/staff">Our Staff</Link>
            </td>
            <td>E: note@therightnote.com</td>
          </tr>
          <tr>
            <Link to="/lessons">
              <td>Lessons</td>
            </Link>
            <td>
              <Link to="/advanced">Advanced Collection</Link>
            </td>
            <td>
              <Link to="/students">Our Students</Link>
            </td>
            <td>
              <Link to="/staff">Our Staff</Link>
            </td>
          </tr>
          <tr>
            <Link to="/about">
              <td>About</td>
            </Link>
            <td>
              <Link to="/store">Full Collection</Link>
            </td>
            <td>
              <Link to="/resources">Resources</Link>
            </td>
            <td>
              <Link to="/about">About</Link>
            </td>
          </tr>
        </table>

        <br />

        <p>Author: Skyla Thadani</p>
        <p>
          Images from
          <a href="cosmomustic.ca"> Cosmo Music </a>
          and Google Images
        </p>
      </footer>
    </div>
  );
};

export default Store;
