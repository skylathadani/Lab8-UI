import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import CardGroup from "react-bootstrap/CardGroup";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

const Store = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Our Products</h1>
          <p>
            View our catalouge of instruments and accessories. Ranging from
            beginner to experienced, we have the perfect fit for you.
          </p>
        </Container>
      </Jumbotron>
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Beginner Collection</strong> View our collection of instruments
        for beginner players.
      </div>

      <br />

      <Alert variant="danger">
        <Alert.Heading>NOTE ABOUT COVID-19</Alert.Heading>
        <p>
          Due to shipping delays and risks, we are closing our online store.
          Please phone to place an order for curb side pickup
        </p>
        <hr />
        <p className="mb-0">Store contact: (000) 000 0000</p>
      </Alert>

      <div class="btn-group" role="group" aria-label="Basic example">
        <Link to="/beginner">
          <button type="button" class="btn btn-outline-info">
            Beginner Collection
          </button>
        </Link>
        <Link to="/intermediate">
          <button type="button" class="btn btn-outline-info">
            Intermediate Collection
          </button>
        </Link>
        <Link to="/advanced">
          <button type="button" class="btn btn-outline-info">
            Advanced Collection
          </button>
        </Link>
        <Link to="/store">
          <button type="button" class="btn btn-outline-info">
            Full Collection
          </button>
        </Link>
      </div>
      <br />
      <br />

      <CardColumns>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cosmomusic.ca/media/catalog/product/cache/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/F/S/FSGCYAMC40_0_9.jpg"
          />
          <Card.Body>
            <Card.Title>Yamaha</Card.Title>
            <Card.Text>C40 Yamaha C40 Classical Guitar - Natural</Card.Text>
            <Button variant="primary">$199.99</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cosmomusic.ca/media/catalog/product/cache/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/D/I/DIDSPERSFS10C75_1_2.jpg"
          />
          <Card.Body>
            <Card.Title>Pearl</Card.Title>
            <Card.Text>
              SFS10C750 Pearl Short Fuse Snare Drum - 10"x4-1/2', Brushed Pewter
            </Card.Text>
            <Button variant="primary">$175.00</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cosmomusic.ca/media/catalog/product/cache/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/D/I/DIDASTGJR312BBL_1_2.jpg"
          />
          <Card.Body>
            <Card.Title>Stagg</Card.Title>
            <Card.Text>
              TIM JR 3/12B BL Stagg Junior 3-piece Drum kit - 12BD/10SD/8,
              Hardware, Cymbal, Throne, Blue
            </Card.Text>
            <Button variant="primary">Please phone for price</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cosmomusic.ca/media/catalog/product/cache/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/b/i/bitmjigpbone2b_0_2.jpg"
          />
          <Card.Body>
            <Card.Title>Jiggs</Card.Title>
            <Card.Text>
              PBONE2B Jiggs pBone Mini Plastic Trombone - Blue
            </Card.Text>
            <Button variant="primary">$144.99</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cosmomusic.ca/media/catalog/product/cache/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/b/s/bstrbactr500_0.jpg"
          />
          <Card.Body>
            <Card.Title>Bach</Card.Title>
            <Card.Text>TR500 Trumpet Bach TR500</Card.Text>
            <Button variant="primary">$629.99</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cosmomusic.ca/media/catalog/product/cache/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/B/S/BSFLARM103_1_3.jpg"
          />
          <Card.Body>
            <Card.Title>Armstrong</Card.Title>
            <Card.Text>103 Armstrong Student Model Open Hole Flute</Card.Text>
            <Button variant="primary">$779.99</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cosmomusic.ca/media/catalog/product/cache/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/K/S/KSPNKORB2N_1_2.jpg"
          />
          <Card.Body>
            <Card.Title>Korg</Card.Title>
            <Card.Text>B2N Korg B2N Digital Piano - Black</Card.Text>
            <Button variant="primary">$459.99</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cosmomusic.ca/media/catalog/product/cache/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/K/S/KSPNCASPX770WE_1_4.jpg"
          />
          <Card.Body>
            <Card.Title>Casio</Card.Title>
            <Card.Text>
              PX77)WE Casio PX-770WE Privia 88-Key Digital Piano - White
            </Card.Text>
            <Button variant="primary">$979.99</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cosmomusic.ca/media/catalog/product/cache/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/C/A/CACXHOSUSB210AC_1_2.jpg"
          />
          <Card.Body>
            <Card.Title>Hosa</Card.Title>
            <Card.Text>
              USB-210AC Hosa High Speed USB Cable - Type A to Micro-B, 10'
            </Card.Text>
            <Button variant="primary">$8.00</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cosmomusic.ca/media/catalog/product/cache/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/H/A/HACSZOOBCF8_1_5.jpg"
          />
          <Card.Body>
            <Card.Title>Zoom</Card.Title>
            <Card.Text>
              ZBCF8 Zoom BCF-8 Battery Case for F8 Multi-Track Field Recorder
            </Card.Text>
            <Button variant="primary">$34.99</Button>
          </Card.Body>
        </Card>
      </CardColumns>
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
