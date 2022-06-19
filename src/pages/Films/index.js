import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { Container, Row, Col } from 'reactstrap';
import Button from 'react-bootstrap/Button';

const App = () => {
    const [hex, setHex] = useState("https://swapi.dev/api/films/1/");

    const alteraCard = () => {
        const randomCard = "https://swapi.dev/api/films/" + Math.floor(Math.random()*6 + 1) + "/";
        setHex(randomCard);
    };

    const [post, setPost] = React.useState(hex);

    React.useEffect(() => {
        axios.get(hex).then((response) => {
          setPost(response.data);
        });
      },);
    
      if (!post) return null;
    
  
    return(
        <>
        <div className="stars">
        <div className="twinkling">
        <div className="clouds">
        <Container fluid="sm" className='container_center'>
            <div>
                <Row className="justify-content-md-center mb-3">
                    <Col md="auto">

                    <h1 className="text-center font-weight-bold text-white">{post.title}</h1>
                    <p className="text-center text-uppercase text-white">{post.opening_crawl}</p>

                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    <Col md="auto">
                    <div className="text-center text-secondary">
                    <Button className="text-center mb-1" variant="outline-light" onClick={alteraCard}>Escolher outro</Button>

                    <br/>
                    <Link className="font-weight-light link-dark" to="/">Voltar</Link></div>
        
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

export default App;