import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProjectCard from '../components/ProjectLayout/ProjectCard.js';
import data from '../assets/data/data.json';


function ProjectPage(props) {

    return (
        <div style={{
            padding: '10px',
            margin: 'auto'
        }}>
            <Grid container spacing={3}>
                {
                    data.cards.map((element, i) => (
                       <ProjectCard  key={i} card={element}/>
                    ))}
            </Grid>

        </div>
    );
}


export default ProjectPage;