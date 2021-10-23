import {
    Typography
} from "@material-ui/core";
import React, {
    useState
} from "react";
import {
    ChevronRight
} from "react-feather";



const AccordionItem = (props) => {

    const arr = [ 1, 2 ];


    // Things to input into the accordion body
    const AccordionContent = (props) => {
        const [ isActive, setIsActive ] = useState(false);


        return (
            <React.Fragment>
                <div className="accordion-item">
                    <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                        <div>
                            <Typography variant="h6">
                                asd
                            </Typography>
                        </div>
                        <div><span><ChevronRight className={`chervon-right ${isActive ? "chervon-active" : ""}`} /></span></div>
                    </div>
                    {isActive &&

                        <div className="accordion-content">
                            <ul>
                                {arr.map(e => (
                                    <li onClick={() => props.setContentPage(e)} >
                                        <Typography variant="body1" >
                                            Hello
                                        </Typography>

                                    </li>
                                ))}

                            </ul>
                        </div>
                    }
                </div>
            </React.Fragment>
        );
    };

    return (
        <React.Fragment>
            <div className="accordion-wrapper">
                <div className="accordion">
                    {
                        arr.map((e) => (
                            <AccordionContent setContentPage={props.setContentPage} />

                        ))}
                </div>
            </div>
        </React.Fragment>
    );
};

export default AccordionItem;