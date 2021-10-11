import React from "react";
import {
    Image 
} from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import data from "../assets/data/data.json";

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
                <Grid container spacing={3}>
                    {data.design.map((element, i) => (
                        <Grid item xs={4}>
                            <div style={{
                                display: "flex", justifyContent: "center" 
                            }}>
                                < Image src={"../" + element.featured_img} className="design-img" />
                            </div>
                        </Grid>



                    ))}
                </Grid>

            </div>
        );

    }

}

export default DesignPage;