import React from "react";


function Footer() {
    return (
        <div className="main-footer">
        <div className="container">
            <div className="row">
            
            <div className="col">
                <h4>Contact</h4><hr/>
                <ul className="list-unstyled">
                <li>1111-22-334</li>
                <li>support@emporium.com</li>
                <li>Lahore</li>
                </ul>
            </div>

            <div className="col">
                <h4>Our Hours</h4><hr/>
                <ul className="list-unstyled">
                <li>Monday-Friday: 9am - 5pm</li>
                <li>Saturday: 10am - 4pm</li>
                <li>Sunday: Closed</li>
                </ul>
            </div>

            <div className="col">
                <h4>Service Areas</h4><hr/>
                <ul className="list-unstyled">
                <li>Lahore</li>
                <li>Gujranwala</li>
                <li>Quetta</li>
                </ul>
            </div>
            </div>
            <hr />
            <div className="row">
            <p className="col-sm">
                &copy;{new Date().getFullYear()} Clothing Emporium | All rights reserved |
                Terms Of Service | Privacy
            </p>
            </div>
        </div>
        </div>
        );
    }

export default Footer;