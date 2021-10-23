import React from "react";
import Grid from "@material-ui/core/Grid";
import data from "../assets/data/data.json";
import ProjectCard from "../components/ProjectLayout/ProjectCard.js";
import ProjectInfo from "../components/ProjectLayout/ProjectInfo.js";
import {
    Typography
} from "@material-ui/core";

class ProjectPage extends React.Component {

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

        // if (this.props.match.params.page) {
        //     let data_key = 0;
        //     data.cards.forEach((element, key) => {
        //         if (element.title.toLowerCase() === this.props.match.params.page.toLowerCase()) {
        //             data_key = key;
        //         }
        //     });
        //     return (
        //         <ProjectInfo id={data_key} />
        //     );
        // } else {
        //     return (
        //         <React.Fragment>
        //             <div style={{
        //                 textAlign: "center"
        //             }}
        //             className="container">
        //                 <Typography variant="h2">Project</Typography>
        //                 <Typography variant="body">Here is a list of project that was done! Happy scrolling! </Typography>
        //             </div>
        //             <div style={{
        //                 padding: "10px",
        //                 margin:  "auto"
        //             }}>
        //                 <Grid container spacing={3}>
        //                     {
        //                         data.cards.map((element, i) => (
        //                             <ProjectCard key={i} card={element} showInfo={this.showInfo} />
        //                         ))}
        //                 </Grid>

        //             </div>
        //         </React.Fragment>
        //     );
        // }
        return(
            <div>
                Coming Soon
            </div>
        );
    }

}

export default ProjectPage;