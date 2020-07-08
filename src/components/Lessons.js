import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Toast from "react-bootstrap/Toast";
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
import CardDeck from "react-bootstrap/CardDeck";
import Col from "react-bootstrap/Col";

const Lessons = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Register for music lessons</h1>
          <p>
            Online lessons are now available to current and new students. Our
            instructors are happy to discuss the right options for your music
            pathway.
          </p>
          <h2>Contact us! </h2>
          <p>(000) 000 0000</p>
        </Container>
      </Jumbotron>
      <Image src="https://www.musicanddance.org/img/headers/28.jpg" fluid />

      <br />
      <br />

      <CardDeck>
        <Card>
          <Card.Img
            variant="top"
            src="https://www.thesoulmedic.com/wp-content/uploads/children-music-love-empathy-science-247493062.jpg"
          />
          <Card.Body>
            <Card.Title>Ages 6 Weeks - 6 Years</Card.Title>
            <Card.Text>
              Enlighten your child with Singing, Rhyming, Dance, Instrument
              Exploration and Listening
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQh4VzrdmuFIptujZo60v6RpDQjmLsHT1v-vw&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>Ages 4-7 Years</Card.Title>
            <Card.Text>
              Instrument Studies (private and group), RCM and Classroom
              Education
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTj-v1J72cjkc3t6jjiy7-GeQ43vUQw-OvrEA&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>Ages 7 -12 Years</Card.Title>
            <Card.Text>
              Instrument Studies (private and group), RCM and Classroom
              Education
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
            src="https://prestigemusicstudios.files.wordpress.com/2010/12/kids-in-band-playing-trumpets-and-violin.jpg"
          />
          <Card.Body>
            <Card.Title>Ages 13+ Years</Card.Title>
            <Card.Text>
              Instrument Studies (private and group), RCM and Classroom
              Education
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://www.musicrepo.com/wp-content/uploads/record-acoustic-guitar-vocals-featured.jpg"
          />
          <Card.Body>
            <Card.Title>Adult</Card.Title>
            <Card.Text>Private or Group Studies</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://music.fsu.edu/sites/g/files/upcbnu406/files/media/images/SummerMusicCamps/JazzSH.jpg"
          />
          <Card.Body>
            <Card.Title>Music Camps</Card.Title>
            <Card.Text>March Break and Summer Music Camps available.</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>

      <br />
      <br />
      <Jumbotron fluid>
        <Container>
          <h1>Get in touch</h1>
          <p>Fill out the form below and we will get back to you promptly</p>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Full Name" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Form.Row>

            <Form.Row />

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Lessons;
