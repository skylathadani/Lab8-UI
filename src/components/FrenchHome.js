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
import { Link } from "react-router-dom";
import { SketchPicker } from "react-color";

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

const Frenchhome = () => (
  <div>
    <br />
    <Link to="/">
      <button type="button" class="btn btn-outline-info">
        Switch to English
      </button>
    </Link>
    <br />
    <br />
    <Jumbotron>
      <h1>Bienvenue sur La Bonne Note!</h1>
      <p>
        Nous sommes un magasin de musique local offrant une variété
        d'instruments pour tous les niveaux de compétence. Nous proposons
        également des cours de musique et un personnel qualifié prêt à soutenez
        votre voyage musical.
      </p>
      <p style={{ color: "#e9ecef" }}>
        <Link to="/store">
          <Button variant="primary">Visiter la boutique</Button>
        </Link>
        test
        <Link to="/lessons">
          <Button variant="primary">Découvrez les leçons</Button>
        </Link>
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
          <h3>Instruments de qualité</h3>
          <p>Visitez notre magasin pour en savoir plus</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://usercontent.one/wp/i-m-magazine.com/wp-content/uploads/2019/06/Steinway-Black-Diamond-Model-B.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Vous songez à apprendre un nouvel instrument?</h3>
          <p>Réservez une consultation de cours dès aujourd'hui</p>
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
          <Card.Title>Personnel de soutien</Card.Title>
          <Card.Text>
            Notre personnel prend en charge une variété de types d'instruments.
            La plupart d'entre eux sont se musicains! Parlez à un membre de
            votre personnel aujourd'hui de votre objectifs musicaux.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Dernière mise à jour il y a 3 minutes
          </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://macbethroof.com/wp-content/uploads/2017/09/Quality-icon.png"
        />
        <Card.Body>
          <Card.Title>Qualité supérieure</Card.Title>
          <Card.Text>
            Nous garantissons que chaque instrument passe par une qualité
            rigoureuse test d'assurance. De plus, beaucoup de nos instruments
            sont livrés avec un garantie et politique de retour flexible. {""}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Dernière mise à jour il y a 3 minutes
          </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/car-512.png"
        />
        <Card.Body>
          <Card.Title>Ramassage latéral</Card.Title>
          <Card.Text>
            Conformément aux normes de sécurité Covid-19, nous utilisons le côté
            trottoir ramasser. Veuillez patienter sur le parking et un membre du
            personnel placera votre commande dans votre coffre sans aucune
            interaction.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Dernière mise à jour il y a 3 minutes
          </small>
        </Card.Footer>
      </Card>
    </CardGroup>
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

export default Frenchhome;
