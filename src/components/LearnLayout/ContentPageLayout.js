import React from "react";
import ReactHtmlParser from "react-html-parser";

const ContentPageLayout = (props) => {
    return (
        <React.Fragment>
            <div className="container">
                {ReactHtmlParser(props.content)}
            </div>
        </React.Fragment>
    );
};

export default ContentPageLayout;