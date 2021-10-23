import React from "react";
import {
    Image
} from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import data from "../assets/data/data.json";
import {
    Typography
} from "@material-ui/core";

class DesignPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            id:    -1
        };

    }

    render() {

        return (
            <div style={{
                padding: "10px",
                margin:  "auto"
            }}>

                <div style={{
                    textAlign: "center"
                }}
                className="introduction-container">
                    <Typography variant="h2">Design</Typography>
                    <Typography variant="body">Design was done using <a href="https://www.adobe.com/sg/products/xd.html">Adobe XD</a> and <a href="https://www.figma.com/">Figma</a>. The design is just drawn for fun as well as learning how to use the UI tools.</Typography>
                </div>
                <Grid container spacing={3}>
                    {data.design.map((element, i) => (
                        <Grid item md={4} xs={12} sm={3} key={i}>
                            <div style={{
                                display: "flex", justifyContent: "center"
                            }}>
                                < Image src={"../" + element} className="design-img" />
                            </div>
                        </Grid>



                    ))}
                </Grid>

            </div >
        );

    }

}

export default DesignPage;