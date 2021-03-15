import React from "react";
import Link from '@material-ui/core/Button';
import { Navbar,Form,Button,FormControl } from 'react-bootstrap';

const TopMenu = () => {
    return ( 
    <div>
    <Navbar bg="light" variant="light" className="topnav">
                <h2 >Clothing Emporium</h2>
                
            <div className="tabs">
                <Link href="/">Home</Link>
                <Link href="/products">Products</Link>
                <Link href="/contactus">Contact Us</Link>                                        
                <Link href="/register">Sign Up</Link>
                        
                
            </div>
                
        
    </Navbar>
    
    <Navbar className="searchnav">
    <Form inline>
        <FormControl type="text" placeholder="Search Here  (Gul Ahmed, Khadi, Motee...)" className="searchbar" />
        <Button variant="success">Search</Button>
    </Form>
    </Navbar>
    </div>
    );
}
 
export default TopMenu;