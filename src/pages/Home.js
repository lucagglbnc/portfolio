import React from 'react';
import TitleCard from '../components/TitleCard'
import Rotation from '../components/Rotation'
//import { Container } from 'react-bootstrap';

function Home(props)
{
    return(
        <div>
            <TitleCard title = {props.title} subtitle = {props.subtitle}/>
            <Rotation/>
        </div>
    );
}

export default Home;