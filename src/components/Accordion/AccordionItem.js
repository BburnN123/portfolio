import React, {
    useState
} from "react";



function AccordionItem(props) {
    const [ isActive, setIsActive ] = useState(false);

    // Things to input into the accordion body
    const AccordionContent = (props) => {
        return (
            <div className="accordion-item">
                <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                    <div>"test"</div>
                    <div>{isActive ? "-" : "+"}</div>
                </div>
                {isActive && <div className="accordion-content">"asdsa"</div>}
            </div>
        );
    };

    return (
        <React.Fragment>
            <div className="accordion-wrapper">
                <div className="accordion">

                    <AccordionContent />
                </div>
            </div>
        </React.Fragment>
    );
}

export default AccordionItem;