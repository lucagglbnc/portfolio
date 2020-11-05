import React from 'react';
import TitleCard from '../components/TitleCard';
import Content from '../components/Content';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { db } from '../firebase';

class Contact extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            name: ' ',
            email:' ',
            message: ' ',
            disabled: false,
            messageSent: null
        }
    }

    handleChange = (e) =>
    {
        let target = e.target;
        let value = target.value;
        let name = target.name;
        this.setState
        ({
            [name]: value
        });
    }

    handleSubmit = (e) =>
    {
        e.preventDefault();
        this.setState
        ({
            disabled: true
        });
        db.collection("contacts")
            .add({
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            })
            .then(() => 
            {
                this.setState
                ({
                    disabled: false,
                    messageSent: true
                });
            })
            .catch(() => 
            {
                this.setState
                ({
                    disabled: false,
                    messageSent: false
                });
            
            });
            
    }

    render() {
        return (
            <div>
                <TitleCard title = {this.props.title}/>
                <Content>
                    <Form onSubmit = {this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor = "name">Name</Form.Label>
                            <Form.Control id = "name" name = "name" type = "text" value = {this.state.name} onChange = {this.handleChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor = "email">Email</Form.Label>
                            <Form.Control id = "email" name = "email" type = "email" value = {this.state.email} onChange = {this.handleChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor = "message">Message</Form.Label>
                            <Form.Control id = "message" name = "message" as = "textarea" value = {this.state.message} onChange = {this.handleChange} rows = '4'/>
                        </Form.Group>
                        <Button className = "d-inline-block" variant = "primary" type = "submit" disabled = {this.state.disabled}>
                            Send
                        </Button>
                        {this.state.messageSent === true && <p className = "d-inline success-msg">Message Sent!</p>}
                        {this.state.messageSent === false && <p className = "d-inline error-msg">Message Failed to Send</p>}
                    </Form>
                </Content>
            </div>
        );
    }
}

export default Contact;