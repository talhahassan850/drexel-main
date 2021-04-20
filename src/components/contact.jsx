import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';

const ContactUs = () => {
   
    return ( 
    <Paper elevation={3}>
    <CssBaseline />
    <h1>Contact Us</h1>
    <Form className="form">
    <Form.Group >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text"/>
    </Form.Group>

    <Form.Group >
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email"/>
    </Form.Group>

    <Form.Group >
        <Form.Label>Contact Number</Form.Label>
        <Form.Control type="number"/>
    </Form.Group>
    
    <Form.Group >
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text"/>
    </Form.Group>
    
    <Form.Group >
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={5} />
    </Form.Group>
    
                <Button variant="primary" type="submit" >
        Submit
    </Button>
        </Form>
        
            
            
        </Paper>
     );
}
 
export default ContactUs;