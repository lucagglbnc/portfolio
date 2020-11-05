import React from 'react';
import TitleCard from '../components/TitleCard';
import Container from '../components/Content';

function About(props)
{
    return(
        <div>
            <TitleCard title = {props.title}/>
            <Container>
                <p className = "py-1">My name is Luca Gigliobianco, I am a software engineer living in Orlando, Florida.
                 I'm currently in my third year at the University of Central Florida, expecting to graduate around December 2021.</p>
                <p> I have experience developing full-stack web applications and their relevant technologies such as React, Node.js, Express, Firebase, and MongoDB to name a few.</p>
            </Container>
        </div>
    );
}

export default About;