import React, {
    useState
} from "react";
import Grid from "@material-ui/core/Grid";
import {
    Typography
} from "@material-ui/core";
import ContentPageLayout from "../components/LearnLayout/ContentPageLayout";
import {
    ChevronRight
} from "react-feather";
import data from "../assets/data/data.json";

// Things to input into the accordion body
const AccordionContent = (props) => {
    const [ isActive, setIsActive ] = useState(false);
    return (
        <React.Fragment>
            <div className="accordion-item">
                <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                    <div>
                        <Typography className="title-name" variant="h6">
                            {props.link.title}
                        </Typography>
                    </div>
                    <div><span><ChevronRight className={`chervon-right ${isActive ? "chervon-active" : ""}`} /></span></div>
                </div>
                {isActive &&

                    <div className="accordion-content">
                        <ul>
                            {

                                // Only appear if the title and the content is being selected
                                Object.keys(props.link.content).map((key, i) => (
                                    <li className={`nav-li ${props.link.title === props.active[0] && key === props.active[1] ? "active" : ""}`}
                                        onClick={() => props.setContentPage(props.link.content[key], [ props.link.title, key ])} >
                                        <Typography className="content-p" variant="body1" >
                                            {key}
                                        </Typography>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                }
            </div>
        </React.Fragment>
    );
};



class LearnPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:   props.title,
            content: "learning",
            active:  [ "", "" ]
        };

        this.setContentPage = this.setContentPage.bind(this);
    }

    setContentPage = (_content, _active) => {

        // this.content = _content;
        this.setState({
            content: _content,
            active:  _active
        }, () => console.log(_content));
    }

    render() {

        return (

        // <Grid container spacing={2} padding="10">
        //     <Grid item md={4} xs={12} sm={3}>
        //         <div className="accordion-wrapper">
        //             <div className="accordion">
        //                 {
        //                     data.learning.map((link, index) => {
        //                         return (
        //                             <AccordionContent active={this.state.active} link={link} setContentPage={this.setContentPage} />);
        //                     })
        //                 }
        //             </div>
        //         </div>

        //     </Grid>
        //     <Grid item md={8} xs={12} sm={3}>
        //         <div>
        //             <ContentPageLayout content={this.state.content} />
        //         </div>

        //     </Grid>
        // </Grid>

            <div>
                Coming Soon
            </div>


        );
    }
}

export default LearnPage;