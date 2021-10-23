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
                    <Typography variant="body">Always delight to look for an opporunity to learn, design and build the product!</Typography>
                </div>
                <div style={{
                    textAlign: "center"
                }}>
                    <div className="contact-socialmedia">
                        <div>
                            <Send />
                        </div>
                        <div style={{
                            marginLeft: "10px"
                        }}>
                            <Typography variant="h5">
                                <a href="mailto:huijie_1995@hotmail.com">
                                    huijie_1995@hotmail.com
                                </a>
                            </Typography>
                        </div>
                    </div>

                    <div style={{
                        marginTop:    "10px",
                        marginBottom: "10px"
                    }}>
                        <Typography variant="h5" className="strike-word">
                            OR
                        </Typography>
                    </div>

                    <div>
                        <Typography variant="h5">
                            <Image src={LinkedinLogo} width="50" />
                            <a style={{
                                marginLeft: "10px"
                            }} href="https://www.linkedin.com/in/gay-hui-jie">

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