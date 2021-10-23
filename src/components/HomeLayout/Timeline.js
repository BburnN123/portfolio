import {
    Typography
} from "@material-ui/core";
import {
    Divider
} from "@material-ui/core";
import React from "react";
import "../../assets/css/timeline.css";
import ReactHtmlParser from "react-html-parser";
import timelineData from "../../assets/data/timeline.json";

function Timeline() {
    {/* <div className="timeline-container right">
<div className="timeline-content">
    <h2>2016</h2>
    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
</div>
</div>
<div className="timeline-container left">
<div className="timeline-content">
    <h2>2015</h2>
    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
</div>
</div>
<div className="timeline-container right">
<div className="timeline-content">
    <h2>2012</h2>
    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
</div>
</div> */}
    return (
        <div className="timeline">
            {timelineData.map((_timeline, index) => {

                return (
                    <div key={index} className={`timeline-container ${index % 2 == 0 ? "left" : "right"}`}>
                        <div className="timeline-content">
                            <Typography variant="h4">
                                {_timeline.year}
                            </Typography>
                            <Divider style={{
                                height: "3px",
                                margin: "5px 0px"
                            }} />
                            <Typography variant="h6">
                                {_timeline.occupation}
                            </Typography>
                            <Typography variant="subtitle1">
                                {_timeline.location}
                            </Typography>
                            <div style={{
                                marginTop: "10px",
                                fontSize:  "14px"
                            }}>
                                {ReactHtmlParser(_timeline.description)}
                            </div>

                        </div>
                    </div>
                );


            })}

           
        </div>
    );
}

export default Timeline;

