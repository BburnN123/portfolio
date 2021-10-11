import {
    Typography 
} from "@material-ui/core";
import React from "react";
import data from "../../assets/data/data.json";
import Slider from "../SliderLayout/Slider.js";

function ProjectInfo(props) {
    let cardData = data.cards[props.id];
    return (
        <React.Fragment>
            <div className="project-info-header">
                <Typography variant="h1" style={{
                    textAlign: "center" 
                }}>{cardData.title} </Typography>

            </div>
            <div className="project-info-container">
                <div className="project-info-description">
                    <Typography variant="subtitle1" style={{
                        textAlign: "right", color: "#A1A1A1" 
                    }}>{cardData.date} </Typography>

                    <Typography variant="body1" style={{
                        textAlign: "justify" 
                    }}>{cardData.description} </Typography>

                    {cardData.link.length > 0 &&
                        <div className="project-info-more">
                            <Typography variant="body1" style={{
                                textAlign: "justify" 
                            }}>More information </Typography>
                           
                            <ul>
                                {cardData.link.map((link, index) => {
                                    return (
                                        <li key={index}>
                                            <a href={link}>{link}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    }
                </div>
            </div>

            {cardData.gallery.length > 0 &&
                <div className="project-info-gallery">
                    <Slider gallery={cardData.gallery} />
                </div>
            }
        </React.Fragment>
    );
}

export default ProjectInfo;