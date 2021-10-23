import {
    Divider
} from "@material-ui/core";
import React from "react";
import {
    Card,
    Image
} from "react-bootstrap";
import Logo from "../../../src/assets/images/logo.png";

import {
    Grid
} from "@material-ui/core";
import data from "../../assets/data/data.json";

const cardContent = {
    display:        "inline-flex",
    justifyContent: "center",
    alignItems:     "center"
};

/*
const cardFooter = {
    position: "absolute",
};
*/

function CardFront(props) {
    const content = data.introduction["front-card"];
    return (
        <Card className="card-side card-front">
            <Card.Body style={cardContent}>
                <Grid container spacing={2}>
                    <Grid item md={4} xs={12} sm={3} style={{
                        textAlign: "center"
                    }}>
                        <Image src={Logo} className="contactcard-img" width="150" />
                    </Grid>
                    <Grid item md={7} xs={12} sm={3}>
                        <div className="contactcard-h1">
                            {content.name}
                        </div>
                        <Divider style={{
                            height: "3px",
                            margin: "5px 0px"
                        }} />
                        <div className="contactcard-h2">
                            {content.occupation}
                        </div>
                        <div className="contactcard-body">
                            {content.description}
                        </div>
                    </Grid>
                </Grid>


            </Card.Body>
            {/* <Card.Body style={cardFooter} className="contactcard-footer">
                <div class="contactcard-footer-content">
                    <div>

                        <Card.Text>
                            <Image src={LinkedinLogo} width="25" style={{
                                marginRight: "5px"
                            }} />
                            /gay-hui-jie
                        </Card.Text>
                    </div>
                    <div>

                        <Card.Text>  <Send /> {content.email}</Card.Text>
                    </div>

                </div>
            </Card.Body> */}
        </Card>
    );
}

export default CardFront;