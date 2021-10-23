import {
    Typography
} from "@material-ui/core";
import React from "react";
import CardInfo from "../components/HomeLayout/CardInfo";


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            id:    -1
        };
    }
    render() {
        return (
            <div>
                <div style={{
                    textAlign: "center"
                }}
                className="container">
                    <Typography variant="h2">Contact card</Typography>
                </div>

                <div className="landing-content">

                    <CardInfo />
                </div>
            </div>
        );
    }
}

export default HomePage;