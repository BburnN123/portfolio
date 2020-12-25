import React, {useState} from 'react';
import data from '../../assets/data/data.json';

function determineClasses(indexes, cardIndex) {
    if (indexes.currentIndex === cardIndex) {
      return "active";
    } else if (indexes.nextIndex === cardIndex) {
      return "next";
    } else if (indexes.previousIndex === cardIndex) {
      return "prev";
    }
    return "inactive";
}

function CardCarouselCard()
{
    return(
        data.cards.map((element, i) => (
            <li>
                {i}
            </li>
        ))
    );
}

export default CardCarouselCard;