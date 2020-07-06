import React, { useState } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <Toast show={show} onClose={() => toggleShow(!show)}>
      <Toast.Header>
        <strong className="mr-auto">React-Bootstrap</strong>
      </Toast.Header>
      <Toast.Body>{children}</Toast.Body>
    </Toast>
  );
};

const home = () => (
  <div>
    <Jumbotron>
      <h1>Welcome to the Right Note!</h1>
      <p>
        We are a locally owned music store offering a variety of instruments for
        all skill levels. We also offer music lessons and skilled staff ready to
        support your musical journey.
      </p>
      <p>
        <Button variant="primary">Visit the Store</Button>{" "}
        <Button variant="primary">Find out about Lessons</Button>
      </p>
    </Jumbotron>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.taylorguitars.com/sites/default/files/styles/hero_rotator/public/TG-GrandPacific-GPGroupShot-1.jpg?itok=c4voc54g"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Quality Instruments</h3>
          <p>Visit our store to find out more</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://usercontent.one/wp/i-m-magazine.com/wp-content/uploads/2019/06/Steinway-Black-Diamond-Model-B.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Thinking of learning a new instrument?</h3>
          <p>Book a lesson consultation today</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <br />

    <CardGroup>
      <Card>
        <Card.Img
          variant="top"
          src="https://cdn.onlinewebfonts.com/svg/img_506202.png"
        />
        <Card.Body>
          <Card.Title>Supportive Staff</Card.Title>
          <Card.Text>
            Our staff supports a variety of instrument types. Most of them are
            musicains themselves! Speak to a staff member today about your
            musical goals.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://macbethroof.com/wp-content/uploads/2017/09/Quality-icon.png"
        />
        <Card.Body>
          <Card.Title>Superior Quality</Card.Title>
          <Card.Text>
            We guarentee that every instrument goes through a rigorous quality
            assurance test. Additionally, many of our instruments come with a
            warentee and flexible return policy.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/car-512.png"
        />
        <Card.Body>
          <Card.Title>Curb Side Pickup</Card.Title>
          <Card.Text>
            In compliance with Covid-19 saftey standards, we are using curb side
            pickup. Please wait in the parking lot and a staff member will place
            your order in your trunk without any interaction.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  </div>
);

export default home;
