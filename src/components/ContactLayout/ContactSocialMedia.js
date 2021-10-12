import React from "react";
import LinkedinLogo from "../../assets/images/linkedin-black.png";
import {
    Image 
} from "react-bootstrap";

function ContactSocialMedia() {
    return(
        <React.Fragment>
            <div className="contact-socialmedia">
                <Image src={LinkedinLogo}/>
                <Image src={LinkedinLogo}/>
            </div>
        </React.Fragment>
    );
}

export default ContactSocialMedia;