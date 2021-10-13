import React from "react";
import {
    useAccordionButton 
} from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import AccordionItem from "../components/Accordion/AccordionItem";

class LearnPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            id:    -1
        };

    }
    render() {
        return (

            <Grid container spacing={2} padding="10">
                <Grid item md={4} xs={12} sm={3}>
                    <AccordionItem/>
                </Grid>
                <Grid item md={8} xs={12} sm={3}>
                    Hellow world
                </Grid>
            </Grid>


        );
    }
}

export default LearnPage;