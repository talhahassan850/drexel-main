import React from 'react';
import { Button, Jumbotron, Container, Carousel, Card, CardDeck } from 'react-bootstrap';
const LandingPage = () => {
    return ( 
    <div>
    <Jumbotron>
    <Container>
        
        <h1 style={{color: "whitesmoke" }}>Welcome to Clothing Emporium </h1>
        <p style={{color: "whitesmoke"}}>
        The Digital hub of branded clothes.
        </p>
    </Container>
    </Jumbotron>
            


            <Carousel className="img">
        <Carousel.Item>
            <img
            className="d-block w-100 b2"
            src='assets/images/b2.jpg'
            alt="Shirt"
            />
            <Carousel.Caption>
            <h1 className="b3">Khadi Stiched Shirts</h1>
            <p className="b3">luxury design 2021</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 b2"
            src='assets/images/b6.jpg'
            alt="masuri"
            />

            <Carousel.Caption>
            <h1 className="b3">Multi Color Shirts</h1>
            <p className="b3">Masuri fabric </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 b2"
            src='assets/images/b7.jpg'
            alt="Digital printing"
            />

            <Carousel.Caption>
            <h1 className="b3">Digital Printing</h1>
            <p className="b3">open cutting with digital printing</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>


    <CardDeck className="card">
        <Card>
            <Card.Img variant="top" src='assets/images/b5.webp' />
            <Card.Body>
            <h2>Anaya lawn</h2>
            <p>
                Chafoon karahi dupatta, <br/> print shirt
            </p>
            
            <Button variant="info" className="cardButton" href="/products">Buy Now</Button>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src='assets/images/b4.webp' />
            <Card.Body>
            <h2>Khadi</h2>
            <p>
            Pure karahi dupatta, <br/> karandi trouser
            </p>
            
            <Button variant="info" className="cardButton" href="/products">Buy Now</Button>
            </Card.Body>
                </Card>

              
                

        <Card>
            <Card.Img variant="top" src='assets/images/b3.webp' />
            <Card.Body>
            <h2>Gul Ahmed </h2>
            <p>
            Print shirt, <br/> karahi trouser
            </p>
            
            <Button variant="info" className="cardButton" href="/products">Buy Now</Button>
            </Card.Body>
        </Card>
    </CardDeck>
    

    <CardDeck className="card">
        <Card>
            <Card.Img variant="top" src='assets/images/b8.webp' />
            <Card.Body>
            <h2>Ghani lawn</h2>
            <p>
                lauxury lawn with pure dupatta, <br/> print shirt
            </p>
            
            <Button variant="info" className="cardButton" href="/products">Buy Now</Button>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src='assets/images/b9.webp' />
            <Card.Body>
            <h2>Khadi</h2>
            <p>
            Dark print shirts, <br/> karandi trouser
            </p>
            
            <Button variant="info" className="cardButton" href="/products">Buy Now</Button>
            </Card.Body>
                </Card>

              
                

        <Card>
            <Card.Img variant="top" src='assets/images/b10.webp' />
            <Card.Body>
            <h2>Twakkal</h2>
            <p>
            Print shirt, <br/> karahi dupatta
            </p>
            
            <Button variant="info" className="cardButton" href="/products">Buy Now</Button>
            </Card.Body>
        </Card>
    </CardDeck>
    
    </div>
        );
}


 
export default LandingPage
