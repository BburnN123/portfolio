import React from 'react';
import data from '../../assets/data/data.json';
import CardCarouselCard from './CardCarouselCard';



class CardCarousel extends React.Component{

    constructor(props)
    {
        super(props)
        this.state = {
            previousIndex: 0,
            currentIndex: 0,
            nextIndex: 1
        }
    }

    componentWillUnmount() {

    }

    componentDidMount() {
     
    }
    

    render()
    {
        return(
            <div>
                <ul>
                  <CardCarouselCard/>
                </ul>
            </div>
        )
    }

}

export default CardCarousel;