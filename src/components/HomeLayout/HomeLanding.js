import React from "react";
import {
  Container, Jumbotron, Row, Col, Button 
} from "react-bootstrap";
import data from "../../assets/data/data.json";



class HomeLanding extends React.Component{
  constructor(props) {
        
    super(props);
    this.state = {
      item: []
    };

  }

  componentDidMount(){
    this.setState({
      item: data.cards
    });
  }

    showInfo =(id)=>{
      this.props.history.push("project/" + data.cards[id - 1].title.toLowerCase());
    }


    render() {
      const item_data = this.state.item;
      console.log(item_data);
      return(
        <Container fluid>
          <Jumbotron className="bg-transparent text-center">
            <Container>
              <Row>
                <Col>
                  <h1 className="font-weight-bolder display-2">Searching the possibility</h1>
                  <h3 className="font-weight-light display-4">Hello, my name is Hui Jie and here is a list of my project that I have done!</h3>
                </Col>
              </Row>     
              <Row>
                <Col>
                  <Button variant="primary" size="lg" >
                                Hold SPACE to start
                  </Button>
                </Col>
              </Row>               
            </Container>
          </Jumbotron>

              
            
        </Container>
      );
    }
}

export default HomeLanding;