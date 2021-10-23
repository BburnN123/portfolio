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
                <Typography variant="h2" style={{
                    textAlign: "center"
                }}>{cardData.title} </Typography>

            </div>
            <div className="divider"></div>
            <div className="container">
                {/* Description of the project information */}
                <div className="project-info-description">
                    <Typography variant="subtitle1" style={{
                        textAlign: "right", color: "#A1A1A1"
                    }}>{cardData.date} </Typography>

                    <Typography variant="body1" style={{
                        textAlign: "justify"
                    }}>{cardData.description} </Typography>

                    {/* External link of the project information */}
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
                    {/* Youtube link to the project */}

                    <div className="divider"></div>
                    {cardData.youtube !== null ?

                        <div className="video-container">
                            <iframe width="560"
                                height="315"
                                src={cardData.youtube}
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                            </iframe>
                        </div> : ""}

                </div>
            </div>
            <div className="divider"></div>

            {/* Image of the project */}
            {cardData.gallery.length > 0 &&
                <div className="project-info-gallery">
                    <Slider gallery={cardData.gallery} />
                </div>
            }
        </React.Fragment>
    );
}

export default ProjectInfo;