import React from 'react';
import logo from './logo/starwars_image.png';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Row, Col } from 'reactstrap';

function Main(){
    return(
        <>
        <div className="stars">
        <div className="twinkling">
        <div className="clouds">
        <Container className='container_center'>
            <div>
                <Row className="justify-content-md-center mb-2">
                    <Col md="auto">
                        <img src={logo} className="App-logo" alt="Star Wars" />
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <ListGroup horizontal>
                            <ListGroup.Item variant="light">
                                <Link to="/films">Films</Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to="/people">People</Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to="/planets">Planets</Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to="/species">Species</Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to="/starships">Starships</Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
            </Row>
            </div>
        </Container>
        </div>
        </div>
        </div>
        </>
    );
};

export default Main;