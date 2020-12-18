import React from 'react';
import {Container, Jumbotron, Row, Col} from 'react-bootstrap';
import data from '../../assets/data/data.json';
import CardInfo from '../CardLayout/CardInfo';
import PortFolioList from '../PortFolioList'

class HomeLanding extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            item : []
        }
    }

    componentWillUnmount()
    {

    }

    componentDidMount(){
        this.setState({
            item : data.cards
        })
    }

    showInfo =(id)=>{
        this.props.history.push('project/' + data.cards[id - 1].title.toLowerCase());
    }

    makeCard = (cards, showInfo) =>
    {
        let back_front_card = [];
        let cardCol = [];
        return cards.map((card,i) => {        
             return <CardInfo key={i} card={card} showInfo={showInfo} />;
        });
    }

    render()
    {
        const item_data = this.state.item;
        console.log(item_data)
        return(
            <Container fluid>
                <Jumbotron className="bg-transparent text-center">
                    <Container>
                        <Row>
                            <Col>
                                <h1 className="font-weight-bolder display-1">Searching the possibility</h1>
                                <h3 className="font-weight-light display-4">Hello, my name is Hui Jie!</h3>
                            </Col>
                        </Row>                    
                    </Container>
                </Jumbotron>
                {/* <PortFolioList /> */}
            
            </Container>
        );
    }
}

export default HomeLanding;