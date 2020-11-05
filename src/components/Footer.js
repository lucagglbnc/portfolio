import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer()
{
    return(
        // mt means margin-top, which will add a space between our footer and whatever is on top of it
        <footer className = "mt-5">
            <Container fluid>
                <Row className = "p-0 border-top justify-content-between p-1">
                    <Col className = "p-0"  md = {1} sm = {6}>
                        <a href = "https://github.com/lucagglbnc" target = "_blank" rel = "noopener noreferrer">GitHub</a>
                    </Col>
                    <Col className = "p-0"  md = {1} sm = {6}>
                        <a href = "mailto:lucagglbnc@gmail.com?subject=Portfolio%20Contact">Email me</a>
                    </Col>
                    <Col className = "p-0 d-flex justify-content-end">
                        Made by Luca G.
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
export default Footer;