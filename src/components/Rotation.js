import React from 'react';
import ProjCard from './ProjCard';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import dnt from '../assets/DNT-Inboard.jpg';
import contactagr from '../assets/Contactagr-Signin.png'
import compiler from '../assets/compiler.png'
import portfoliosc from '../assets/portfoliosc.png'

class Rotation extends React.Component
{
    
    constructor(props)
    {
        super(props);
        this.state =
        {
            cards:
            [
                {
                    id: 0,
                    title: "DNT",
                    subtitle: "A full-stack application that allows teams to visually organize themselves.",
                    img: dnt,
                    link: 'https://github.com/ffermo/COP4331_Group11',
                    selected: false
                },
                {
                    id: 1,
                    title: "Contactagr",
                    subtitle: "A full-stack application that allows users to manage their contacts.",
                    img: contactagr,
                    link: 'https://github.com/Aestrus/cop4331_group14',
                    selected: false
                },
                {
                    id: 2,
                    title: "Compiler",
                    subtitle: "A compiler for PL/0 written in C.",
                    img: compiler,
                    link:'https://github.com/lucagglbnc/pl0_compiler',
                    selected: false
                },
                {
                    id: 3,
                    title: "This site!",
                    subtitle: "This portfolio site, uses React and Firebase.",
                    img: portfoliosc,
                    link:'#',
                    selected: false
                }
            ]
        }
    }
    
    handleCardClick = (id, e) =>
    {
        let cards = [...this.state.cards];
        cards[id].selected = !cards[id].selected
        cards.forEach(element => {
           if(element.id !== id) 
                element.selected = false;
        });
        this.setState
        ({
            cards
        });
    }

    makeCards = (cards) =>
    {
        return cards.map(crd => {
            return <ProjCard card = {crd} click = {e => this.handleCardClick(crd.id, e)} key = {crd.title}/>
        });
    }

    render()
    {
        return (
            <Container fluid>
                <Row className = "justify-content-around">
                    {this.makeCards(this.state.cards)}
                </Row>
            </Container>
        ); 
    }
}
export default Rotation;