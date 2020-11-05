import React from 'react';
import {Card} from 'react-bootstrap';

function ProjCard(props)
{
    return(
    <Card style = {{ width: '18rem' }} onClick = {(e) => props.click(props.card)} bg = {props.card.selected ? 'dark' : 'light'}
     text = {props.card.selected ? 'light' : 'dark'} border = {props.card.selected ? 'dark' : 'light'}>
        <Card.Img variant="top" src = {props.card.img} />
        <Card.Body>
            <Card.Title>{props.card.title}</Card.Title>
            <Card.Text>{props.card.subtitle}</Card.Text>
            <Card.Link href = {props.card.link} target = "_blank" rel = "noopener noreferrer">Check it out!</Card.Link>
        </Card.Body>
    </Card>
    );
}

export default ProjCard;