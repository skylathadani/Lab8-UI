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
          <h1>Our Staff</h1>
          <p>
            Our staff are here to support you! Learn about our managers and the
            departments they serve
          </p>
        </Container>
      </Jumbotron>
      <Image
        src="https://cdn.merriammusic.com/2014/01/Music-Lessons-Mississauga.jpg"
        fluid
      />
      <br />
      <br />

      <CardDeck>
        <Card>
          <Card.Img
            variant="top"
            src="https://www.classicsforkids.com/images/composers/Bach.jpg"
          />
          <Card.Body>
            <Card.Title>Johann Sebastian Bach</Card.Title>
            <Card.Text>
              Johann leads our floor department. If you need help shopping in
              our instrument gallery his team has you covered.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://www.biography.com/.image/t_share/MTE1ODA0OTcxNzMyNjY1ODY5/wolfgang-mozart-9417115-2-402.jpg"
          />
          <Card.Body>
            <Card.Title>Wolfgang Amadeus Mozart</Card.Title>
            <Card.Text>
              Wolfgang is an all knowing piano god. If you need help tickling
              the ivories, reach out to him and his team.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://www.biography.com/.image/t_share/MTI2NTgyMzIxOTcyMjU5NDU5/beethoven-600x600jpg.jpg"
          />
          <Card.Body>
            <Card.Title>Ludwig Van Beethoven</Card.Title>
            <Card.Text>
              Ludwig supervises our instructors and teachers. Rumour has it that
              a student once blew a trumpet so loudly in his ear, he has started
              to go deaf!
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
            src="https://bachtrack.com/files/172374-cajkovskij-ritratto-seduto---odessa--1893--kopie.gif"
          />
          <Card.Body>
            <Card.Title>Pyotr Ilyich Tchaikovsky</Card.Title>
            <Card.Text>
              Our newest addition to the team, Pyotry, manages our online
              orders! If you need help online, he is your guy.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://www.opera-online.com/media/images/avatar/author/17/xl_avatar.jpg?1315991816"
          />
          <Card.Body>
            <Card.Title>Richard Wagner</Card.Title>
            <Card.Text>
              Richard looks after our repair department. Need help fixing a
              broken part, look for his team.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://www.wrti.org/sites/wrti/files/styles/x_large/public/201702/Brahms1200px.jpg"
          />
          <Card.Body>
            <Card.Title>Johannes Brams</Card.Title>
            <Card.Text>
              Johannes takes care of our guitars. If you need advice on your
              next string instrument, his team is full of recommendations.
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
