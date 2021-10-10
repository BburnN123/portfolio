import React, { useState } from 'react';
import { Image } from 'react-bootstrap'
import LeftArrow from '../../assets/images/left-arrow.png'
import RightArrow from '../../assets/images/right-arrow.png'
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";



const Slider = (props) => {
    
    const length = props.gallery.length;
    // Define the initial value and store it
    const [current, setCurrent] = useState(0);
    const [nextCurrent, setNextCurrent] = useState(1);
    const [prevCurrent, setPrevCurrent] = useState(2);



    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
        setNextCurrent(nextCurrent === length - 1 ? 0 : nextCurrent + 1)
        setPrevCurrent(prevCurrent === length - 1 ? 0 : prevCurrent + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
        setNextCurrent(nextCurrent === 0 ? length - 1 : nextCurrent - 1)
        setPrevCurrent(prevCurrent === 0 ? length - 1 : prevCurrent - 1)

    }

    if (length === 0) {
        return null;
    }
    else {
        return (

            <React.Fragment>
                <FiArrowLeftCircle  className="gallery-arrow gallery-arrow-left" onClick={prevSlide}/>
                <FiArrowRightCircle  className="gallery-arrow gallery-arrow-right" onClick={nextSlide}/>
      
                {props.gallery.map((img, index) =>
                    <div className={`gallery-div ${current === index ? "slide-active" : ""}${nextCurrent === index? "slide-right" : ""}${prevCurrent === index? "slide-left" : ""}`}>
                        < Image src={"../" + img} className="project-info-img" />
                        {/* < Image src={"../" + img} className={`project-info-img `} /> */}
                    </div>
                )}

            </React.Fragment>

        )
    }
}

export default Slider;