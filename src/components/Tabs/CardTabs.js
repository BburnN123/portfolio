import React from 'react';

function filterCard(e,c)
{
  setClassActive(e);
  var cardWrapper = document.getElementsByClassName("card-wrapper");
  for(var i = 0; i < cardWrapper.length; i++)
  {
    const cardCategory = cardWrapper[i].getAttribute("data-category");
    if(c === "All")
    {
      cardWrapper[i].setAttribute("data-select", true)
    }
    else if(c === cardCategory)
    {
      cardWrapper[i].setAttribute("data-select", true)
    }
    else{
      cardWrapper[i].setAttribute("data-select", false)
    }
  }
 
}

function setClassActive(e)
{
  var buttonGroup = document.getElementById("button-group");
  var liGroup = buttonGroup.getElementsByTagName("li");
  
  for(var i = 0; i < liGroup.length; i++)
  {
      liGroup[i].classList.remove("active");
  }
  e.currentTarget.classList.add("active");
}

function CardTabs(props)
{
    return(
      <li className={ props.category === "All" ? "active" : ""} onClick={(e) => filterCard(e,props.category)}>
        <span>
          {props.category}
        </span>
      </li>
    );
}

export default CardTabs;
