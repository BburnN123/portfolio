import React from 'react';
import {Container} from 'react-bootstrap'
import CardInfo from './CardLayout/CardInfo';
import CardTabs from './Tabs/CardTabs';
import data from '../assets/data/data.json';
import PortFolioInfo from './PortFolioInfo';
import Header from '../components/Header';

class PortFolioList extends React.Component
{
    
    constructor(props)
    {
        super(props);
        this.state={
            title : props.title,
            id : -1
        };

    }

    componentWillUnmount() {

    }

    componentDidMount() {
     
    }
    
    showInfo =(id)=>{
        this.props.history.push('project/' + data.cards[id - 1].title.toLowerCase());
    }

    // Create cards
    makeCard = (cards, showInfo) =>
    {
        let back_front_card = [];
        let cardCol = [];
        return cards.map((card,i) => {        
             //Push the front and back of the card
             back_front_card.push(<CardInfo key={i} card={card} showInfo={showInfo} />);
             
             //Group the card together
             let col = React.createElement("div",{className : 'col-4 card-wrapper', key : i, 'data-category': card.category, 'data-select' : true}, back_front_card);
             cardCol.push(col);
             
             //Clear the array
             back_front_card =[];

            if(cards.length === i+1)
            {  
                let row = React.createElement("div",{className : 'card-row row' ,id : 'card-row', key : i}, cardCol);
                cardCol = [];
                back_front_card =[];
                return row;
            }
            return null;
        });
    }

     // Create tabs
     makeTabs = (cards) =>
     {
         let categorys = ['All']
         cards.forEach(element => {
             if(!categorys.includes(element.category))
             {
                categorys.push(element.category);
             }
         });

         return categorys.map((category,i) => {        
            return <CardTabs key={i} category={category} />
         });
     }

    render()
    {
        if(this.props.match.params.page)
        {
            let data_key = 0;
            data.cards.forEach((element, key) => {
                if(element.title.toLowerCase() === this.props.match.params.page.toLowerCase())
                {
                    data_key = key;
                }
            })

            console.log(data_key)
            return(
                <PortFolioInfo id={data_key} />
            );
        }
        else{
            return(
                <Container id="portfolio-container" fluid>
                     <Header title={this.state.title}/>
                    <ul id="button-group">
                        {this.makeTabs(data.cards)}
                    </ul>
                    {this.makeCard(data.cards, this.showInfo)}
                 
                </Container>
            );
        }
    }
  
}

export default PortFolioList;
