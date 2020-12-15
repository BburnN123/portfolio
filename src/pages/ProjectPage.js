import React from 'react';
import PortFolioList from '../components/PortFolioList';
import Header from '../components/Header';

function ProjectPage(props){
    return(
        <div>
            <PortFolioList title={props.title} page={props.page}/>
        </div>
    );
}


export default ProjectPage;