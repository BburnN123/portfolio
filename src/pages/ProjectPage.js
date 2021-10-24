import React from "react";
import Grid from "@material-ui/core/Grid";
import data from "../assets/data/project.json";
import ProjectCard from "../components/ProjectLayout/ProjectCard.js";
import ProjectInfo from "../components/ProjectLayout/ProjectInfo.js";
import {
    Typography
} from "@material-ui/core";

class ProjectPage extends React.Component {

    constructor(props) {
        super(props);


        const jsonCards = data.cards.sort(function (a, b) {

            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(b.date) - new Date(a.date);
        });
        this.state = {
            title:     props.title,
            id:        -1,
            jsonCards: jsonCards
        };
    }

    showInfo = (id) => {
        this.props.history.push("project/" + this.state.jsonCards[id].title.toLowerCase() + "#");
    }

    render() {


        if (this.props.match.params.page) {
            let data_key = 0;
            this.state.jsonCards.forEach((element, key) => {
                if (element.title.toLowerCase() === this.props.match.params.page.toLowerCase()) {
                    data_key = key;
                }
            });
            window.scrollTo(0, 0);
            
            return (
                <ProjectInfo id={data_key} />
            );
        } else {
            return (
                <React.Fragment>
                    <div style={{
                        textAlign: "center"
                    }}
                    className="intoduction-container">
                        <Typography variant="h2">Project</Typography>
                        <Typography variant="body1">Here is a list of project that was done! Happy scrolling! </Typography>
                    </div>
                    <div style={{
                        padding: "10px",
                        margin:  "auto"
                    }}>
                        <Grid container spacing={3}>
                            {
                                this.state.jsonCards.map((_element, i) => {
                                    _element.id = i;

                                    return (
                                        <ProjectCard key={i} card={_element} showInfo={this.showInfo} />
                                    );
                                }
                                )}
                        </Grid>

                    </div>
                </React.Fragment>
            );
        }
    }

}

export default ProjectPage;