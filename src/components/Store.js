import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import CardGroup from "react-bootstrap/CardGroup";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

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

      <Alert variant="danger">
        <Alert.Heading>NOTE ABOUT COVID-19</Alert.Heading>
        <p>
          Due to shipping delays and risks, we are closing our online store.
          Please phone to place an order for curb side pickup
        </p>
        <hr />
        <p className="mb-0">Store contact: (000) 000 0000</p>
      </Alert>

      <CardColumns>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cosmomusic.ca/media/catalog/product/cache/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/F/S/FSGAALVAD60CESH_0_4.jpg"
          />
          <Card.Body>
            <Card.Title>Alvares</Card.Title>
            <Card.Text>
              Alvares AD60CESHB Artist Acoustic-Electric Guitar - Shadow Burst
            </Card.Text>
            <Button variant="primary">$700.67</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cosmomusic.ca/media/catalog/product/cache/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/F/S/FSGAFEN97171222_0_4.jpg"
          />
          <Card.Body>
            <Card.Title>Fender</Card.Title>
            <Card.Text>
              0971712022 Fender Alkaline Trio Malibu Acoustic Guitar - Walnut,
              Natural
            </Card.Text>
            <Button variant="primary">$500.00</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cosmomusic.ca/media/catalog/product/cache/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/f/s/fsgeeast486bbk_0_6.jpg"
          />
          <Card.Body>
            <Card.Title>Eastman</Card.Title>
            <Card.Text>
              t486B-BK Eastman - t486B Electric Guitar With Case - Black
            </Card.Text>
            <Button variant="primary">$1,725.00</Button>
          </Card.Body>
        </Card>
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
            <Button variant="primary">Go somewhere</Button>
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
            src="https://cosmomusic.ca/media/catalog/product/cache/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/B/S/BSTRJUPJTR710_1_2.jpg"
          />
          <Card.Body>
            <Card.Title>Jupiter</Card.Title>
            <Card.Text>JTR710 Jupiter Pocket Trumpet</Card.Text>
            <Button variant="primary">$750.00</Button>
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
            src="https://cosmomusic.ca/media/catalog/product/cache/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/B/S/BSCLSEL1400B_1_3.jpg"
          />
          <Card.Body>
            <Card.Title>Selmer</Card.Title>
            <Card.Text>Selmer 1400 Bb Clarinet</Card.Text>
            <Button variant="primary">$500.00</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cosmomusic.ca/media/catalog/product/cache/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/B/S/BSSTPMA180G1_1_4.jpg"
          />
          <Card.Body>
            <Card.Title>P. Mauriat</Card.Title>
            <Card.Text>P. Mauriat PMST-180G1 Tenor Saxophone - Gold</Card.Text>
            <Button variant="primary">$2,649.00</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cosmomusic.ca/media/catalog/product/cache/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/k/s/kspgychy150bp_0_3.jpg"
          />
          <Card.Body>
            <Card.Title>Young Chang</Card.Title>
            <Card.Text>
              Y150BP Young Chang Baby Grand Piano - Black Polish
            </Card.Text>
            <Button variant="primary">Please phone for price</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cosmomusic.ca/media/catalog/product/cache/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/k/s/kspuwebaw121bp_0.jpg"
          />
          <Card.Body>
            <Card.Title>Albert Weber</Card.Title>
            <Card.Text>
              AW121BP Alber Weber Professional Upright Piano - Ebony Polish
            </Card.Text>
            <Button variant="primary">Please phone for price</Button>
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
    </div>
  );
};

export default Store;
