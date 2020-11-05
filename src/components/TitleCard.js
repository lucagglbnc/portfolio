import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron'

function TitleCard(props)
{
    return(
        <Jumbotron className = "bg-transparent jumbotron-fluid">
            <Container fluid>
                <Row className = "justify-content-center py-2">
                    <Col md = 'auto' sm = 'auto'>
                    <h1 className = "display-1 font-weight-normal">{props.title}</h1>
                    <h4 className = "display-4 font-weight-lighter">{props.subtitle}</h4>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default TitleCard;