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
          <h1>Our Students</h1>
          <p>Explore and find out what our students are doing!</p>
        </Container>
      </Jumbotron>
      <Image
        src="https://music8282.com/wp-content/uploads/revslider/parallax10.jpg"
        fluid
      />
      <br />
      <br />

      <CardDeck>
        <Card>
          <Card.Img
            variant="top"
            src="https://i.guim.co.uk/img/media/57b250b1a9ef3d1268c47106150fe0fb183cc626/615_101_1811_1086/master/1811.jpg?width=700&quality=85&auto=format&fit=max&s=249c83f240c8a27b23666de5040ee618"
          />
          <Card.Body>
            <Card.Title>Aretha Franklin</Card.Title>
            <Card.Text>
              Aretha Franklin has been spending her time writing and singing
              soul. She is the first women to be inducted into the Rock and Roll
              Hall of Fame.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://www.grammy.com/sites/com/files/styles/image_landscape_hero/public/muzooka/The%2BBeatles/The%2520Beatles_16_9_1591112973.jpg?itok=zCmnmpnn"
          />
          <Card.Body>
            <Card.Title>The Beatles</Card.Title>
            <Card.Text>
              The Beatles have made major contributions to music and are often
              the inspiration of many of our musicians.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://i.ytimg.com/vi/vdB-8eLEW8g/hqdefault.jpg"
          />
          <Card.Body>
            <Card.Title>Bob Marley</Card.Title>
            <Card.Text>
              Bob Marley has produced several songs using Carribean instruments
              and vibes. He is most memorable for his Reggae music.
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
            src="https://www.udiscovermusic.com/wp-content/uploads/2019/07/Queen-mid-70s-approved-photo-04-web-optimised-1000-1.jpg"
          />
          <Card.Body>
            <Card.Title>Queen</Card.Title>
            <Card.Text>
              Queen has become one of the most legendary rock bands of our time.
              They have pushed the boundaries with both rock and pop music.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ceab0869736330008aa0006%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D256%26cropX2%3D1728%26cropY1%3D231%26cropY2%3D1704"
          />
          <Card.Body>
            <Card.Title>Madonna</Card.Title>
            <Card.Text>
              Madonna has become a seven-time Grammy Award Winner and sold over
              three hundred million records to adoring fans around the world.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/07/22/12/amywinehouse2207r.jpg?width=1000&height=614&fit=bounds&format=pjpg&auto=webp&quality=70&crop=16:9,offset-y0.5"
          />
          <Card.Body>
            <Card.Title>Amy Winehouse</Card.Title>
            <Card.Text>
              Amy Winehouse was originally a jazz musician but has since
              branched out to produce several memorable hints. Several of her
              tracks still feature her jazz roots.
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
