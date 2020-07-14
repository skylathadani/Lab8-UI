import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CardDeck from "react-bootstrap/CardDeck";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const about = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>About us</h1>
          <p>
            The Right Note is a family owned business, explore our story below
          </p>
        </Container>
      </Jumbotron>
      <Image
        src="https://blog.truefire.com/wp-content/uploads/2016/10/guitar-teacher.jpg"
        fluid
      />
      <br />
      <br />

      <CardDeck>
        <Card>
          <Card.Img
            variant="top"
            src="https://simpleicon.com/wp-content/uploads/local-SEO.svg"
          />
          <Card.Body>
            <Card.Title>Started Local</Card.Title>
            <Card.Text>
              Our doors opened in 2020 for the wonderful city of Ottawa
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://image.flaticon.com/icons/png/512/107/107828.png"
          />
          <Card.Body>
            <Card.Title>Commitment to Quality</Card.Title>
            <Card.Text>
              We pride ourselves on superior service and quality for both our
              instruments and lessons.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://image.flaticon.com/icons/svg/58/58038.svg"
          />
          <Card.Body>
            <Card.Title>Family Owned and Operated</Card.Title>
            <Card.Text>
              The Right Note is a family owned business with a commitment to
              treat you like one of our own.
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
          <Card.Img
            variant="top"
            src="https://cdn.onlinewebfonts.com/svg/img_506202.png"
          />
          <Card.Body>
            <Card.Title>Hard working staff</Card.Title>
            <Card.Text>
              Our staff is committed to providing you the best service possible.
              Most of them are trained musicians ready to help you on your
              musical journey.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://cdn.onlinewebfonts.com/svg/img_155927.png"
          />
          <Card.Body>
            <Card.Title>Buy and Repair</Card.Title>
            <Card.Text>
              Not only will you be going home with an instrument made with
              quality and care, we offer plenty of warentee options to help
              service your instrument right in house.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://g6c7x8r2.stackpathcdn.com/wp-content/uploads/2018/11/transparent-music-icon-5.jpg.png"
          />
          <Card.Body>
            <Card.Title>Get Ready to Learn</Card.Title>
            <Card.Text>
              Our music lessons were created with the student in mind. We offer
              fun and enriching lessons for students and skill levels of all
              ages.
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

export default about;
