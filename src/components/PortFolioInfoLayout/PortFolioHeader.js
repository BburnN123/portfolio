import React from 'react';
import {Carousel, Image} from 'react-bootstrap'

function PortFolioHeader(props)
{
    return(
      <div>
        <Image src={props.image} fluid />
      </div>

      //   <Carousel className="portfolio-carousel">
      //   <Carousel.Item>
      //     <img
      //       className="d-block w-100 "
      //       src={props.image}
      //       alt="First slide"
      //     />
      //     <Carousel.Caption>
      //       <h3>First slide label</h3>
      //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      //     </Carousel.Caption>
      //   </Carousel.Item>
      //   <Carousel.Item>
      //     <img
      //       className="d-block w-100"
      //       src={props.image}
      //       alt="Third slide"
      //     />
      //     <Carousel.Caption>
      //       <h3>Second slide label</h3>
      //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      //     </Carousel.Caption>
      //   </Carousel.Item>
      //   <Carousel.Item>
      //     <img
      //       className="d-block w-100"
      //       src={props.image}
      //       alt="Third slide"
      //     />
      //     <Carousel.Caption>
      //       <h3>Third slide label</h3>
      //       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      //     </Carousel.Caption>
      //   </Carousel.Item>
      // </Carousel>
    );
}

export default PortFolioHeader;