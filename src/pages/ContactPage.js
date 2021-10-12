/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import data from "../assets/data/data.json";
import {
    Typography
} from "@material-ui/core";
import {
    Send
} from "react-feather";
import LinkedinLogo from "../assets/images/linkedin-black.png";
import {
    Image
} from "react-bootstrap";
import Grid from "@material-ui/core/Grid";

class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            id:    -1
        };
    }

    showInfo = (id) => {
        this.props.history.push("project/" + data.cards[id - 1].title.toLowerCase());
    }

    render() {

        return (
            <div style={{
                padding: "10px", margin: "auto"
            }}>
                <div style={{
                    textAlign: "center"
                }}
                className="container">
                    <Typography variant="h2">Contact Me</Typography>
                    <Typography variant="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae feugiat magna. Phasellus sed magna dui. Pellentesque pretium, purus sed facilisis aliquam, eros ex pharetra mi, ut viverra massa purus in nibh.</Typography>
                </div>
                <div style={{
                    textAlign: "center"
                }}>
                    <div className="contact-socialmedia">
                        <div>
                            <Send />
                        </div>
                        <div className="text-before">
                            <Typography variant="h5">Email</Typography>
                        </div>
                        <div className="text-after">
                            <Typography variant="h5">Send an Email</Typography>
                        </div>
                    </div>

                    <div>
                        <Typography variant="h5" className="strike-word">
                            OR
                        </Typography>
                    </div>

                    <div>
                        <Typography variant="h5">

                            <a href="https://www.linkedin.com/in/gay-hui-jie">
                                {/* <Image src={LinkedinLogo} width="200" /> */}
                                Linkedin
                            </a>
                        </Typography>
                    </div>

                </div>
            </div >
        );

    }
}

export default ContactPage;