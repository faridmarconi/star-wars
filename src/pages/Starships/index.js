import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { Container, Row, Col } from 'reactstrap';
import Button from 'react-bootstrap/Button';

const App = () => {
    const [hex, setHex] = useState("https://swapi.py4e.com/api/starships/2/");

    const alteraCard = () => {
        const randomCard = "https://swapi.py4e.com/api/starships/" + Math.floor(Math.random()*37 + 1) + "/";
        setHex(randomCard);
    };

    var url = hex;

    const [post, setPost] = React.useState(url);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        axios.get(url).then((response) => {
            setPost(response.data);
        }).catch(error => {
            if (error.response) {
                // The client was given an error response (5xx, 4xx)
                return alteraCard();
            } else {
                // Anything else
                setError(error);
            }
            //setError(error);
          });
      },);

        if (error) return `Error: ${error.message}`;
        if (!post) return "No post!"
    
  
    return(
        <>
        <div className="stars">
        <div className="twinkling">
        <div className="clouds">
        <Container fluid="sm" className='container_center'>
            <div>
                <Row className="justify-content-md-center mb-3">
                    <Col md="auto">

                    <h1 className="text-center font-weight-bold text-white">{post.name}</h1>
                    <p className="text-center text-uppercase text-white">Model: {post.model}</p>

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