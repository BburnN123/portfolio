import {
    Divider
} from "@material-ui/core";
import {
    Card
} from "react-bootstrap";
import data from "../../assets/data/data.json";

const containerStyle = {
    marginBottom: "10px"
};

function CardBack(props) {
    const content = data.introduction["back-card"];
    return (
        <Card className="card-side card-back">
            <Card.Body>

                <div style={containerStyle}>

                    <div className="contactcard-h2">
                        Aims
                    </div>
                    <div className="contactcard-body">
                        {content.aim}
                    </div>
                </div>

                <div style={containerStyle}>
                    <div className="contactcard-h2">
                        Skillset
                    </div>
                    <div className="contactcard-h2">
                        <div className="chip-container">
                            {
                                content.skillset.map((_skillset, i) => (
                                    <div className="chip" key={i}>
                                        <span>
                                            {_skillset}
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div style={containerStyle}>
                    <div className="contactcard-h2">
                        What am I currently doing
                    </div>
                    <div className="contactcard-body">
                        {content.current.length === 0 ? "Taking a rest from learning!"
                            :
                            <ul className="contactcard-ul">
                                {content.current.map((_content, i) => (
                                    <li key={i}>
                                        {_content}
                                    </li>
                                ))
                                }
                            </ul>
                        }
                    </div>
                </div>
            </Card.Body>
        </Card >
    );
}

export default CardBack;