import {
    Typography
} from "@material-ui/core";
import React from "react";
import data from "../../assets/data/project.json";
import Slider from "../SliderLayout/Slider.js";
import ReactHtmlParser from "react-html-parser";

function ProjectInfo(props) {
    let cardData = data.cards[props.id];
    return (
        <React.Fragment>
            <div className="project-info-header">
                <Typography variant="h2" style={{
                    textAlign:     "center",
                    textTransform: "capitalize"
                }}>{cardData.title.replaceAll("-", " ")} </Typography>

            </div>
            <div className="divider"></div>
            <div className="container">
                {/* Description of the project information */}
                <div className="project-info-description">
                    <Typography variant="subtitle1" style={{
                        textAlign: "right", color: "#A1A1A1"
                    }}>{cardData.date} </Typography>

                    {ReactHtmlParser(cardData.description)}

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
                                            <a href={link} target="_blank">{link}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    }

                    {/* Youtube link to the project */}

                    <div className="divider"></div>
                    {cardData.youtube.length > 0 &&

                        <div className="video-container">
                            {cardData.youtube.map((youtube_link, index) => (
                                <iframe
                                    key={index}
                                    src={youtube_link}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                                </iframe>
                            ))}

                        </div>

                    }



                </div>
            </div >
            <div className="divider"></div>

            {/* Image of the project */}
            {
                cardData.gallery.length > 0 &&
                <div className="project-info-gallery">
                    <Slider gallery={cardData.gallery} />
                </div>
            }
        </React.Fragment >
    );
}

export default ProjectInfo;