import {
    Typography
} from "@material-ui/core";
import React from "react";
import CardInfo from "../components/HomeLayout/CardInfo";
import Timeline from "../components/HomeLayout/Timeline";


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
                className="introduction-container">
                    <Typography variant="h3">Hello, there!</Typography>
                </div>

                <div className="landing-content">
                    <CardInfo />
                </div>
                <div>
                    <Timeline />
                </div>
            </div>
        );
    }
}

export default HomePage;