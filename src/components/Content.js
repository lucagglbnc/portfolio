import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function Content(props)
{
    return(
        <Container>
            <Row>
                <Col>{props.children}</Col>
            </Row>
        </Container>
    );
}

export default Content;