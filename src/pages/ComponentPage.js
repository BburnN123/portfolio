import React from "react";


class ComponentPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isImageMagnifierActive: false,
            lensPositionX:          0,
            lensPositionY:          0,

            imageWidth:  512,
            imageHeight: 350,

            lensBoxWidth:  267,
            lensBoxHeight: 267,

            imageZoomContainerWidth:  512,
            imageZoomContainerHeight: 512,


            imageZoomContainerBackgroundSizeX:     0,
            imageZoomContainerBackgroundSizeY:     0,
            imageZoomContainerRatioX:              0,
            imageZoomContainerRationY:             0,
            imageZoomContainerBackgroundPositionX: 0,
            imageZoomContainerBackgroundPositionY: 0
        };

        this.imageRef = React.createRef();
    }

    componentDidMount() {

        /* Calculate the ratio between the image zoom container and lens */
        const imageZoomContainerRatioX = this.state.imageZoomContainerWidth / this.state.lensBoxWidth;
        const imageZoomContainerRationY = this.state.imageZoomContainerHeight / this.state.lensBoxHeight;

        this.setState({
            imageZoomContainerRatioX:          imageZoomContainerRatioX,
            imageZoomContainerRationY:         imageZoomContainerRationY,
            imageZoomContainerBackgroundSizeX: this.state.imageWidth * imageZoomContainerRatioX,
            imageZoomContainerBackgroundSizeY: this.state.imageHeight * imageZoomContainerRationY
        });

    }

    render() {

        return (
            <>
                <style jsx>{
                    `
                    * {box-sizing: border-box;}
                    .ctn {
                        position: relative;
                      }
                          
                    .zoom-lens {
                        box-sizing:border-box;
                        position: absolute;
                        border: 1px solid rgba(42, 100, 219, 0.45);
                        background: rgba(42, 100, 219, 0.25);
                        /*set the size of the lens:*/
                        width:  ${this.state.lensBoxWidth}px;
                        height: ${this.state.lensBoxHeight}px;
                      }

                    .zoom-window {
                        position: absolute;
                        left: 40vw;
                        border: 1px solid #d4d4d4;
                        /*set the size of the result div:*/
                        width: ${this.state.imageZoomContainerWidth}px;
                        height: ${this.state.imageZoomContainerHeight}px;
                   
                    }
                    `
                }</style>

                <div className="ctn">


                    {/* CONTAINER */}
                    {this.state.isImageMagnifierActive &&
                        <div
                            className="zoom-window"
                            style={{
                                backgroundImage:     "url(portfolio/img/team_project/workflow.PNG)",
                                backgroundPositionX: `${this.state.imageZoomContainerBackgroundPositionX}px`,
                                backgroundPositionY: `${this.state.imageZoomContainerBackgroundPositionY}px`,
                                backgroundSize:      `${this.state.imageZoomContainerBackgroundSizeX}px ${this.state.imageZoomContainerBackgroundSizeY}px`

                            }} ></div>
                    }

                    {/* IMAGE */}
                    <img
                        ref={this.imageRef}
                        src="portfolio/img/team_project/workflow.PNG"
                        width={this.state.imageWidth}
                        height={this.state.imageHeight}
                        onMouseMove={this.onMouseMoveImageZoom}
                    />

                    {/* MAGNIFIER GLASS */}
                    {this.state.isImageMagnifierActive &&
                        <div
                            class="zoom-lens"
                            onMouseMove={this.onMouseMoveImageZoom}
                            style={{
                                left: `${this.state.lensPositionX}px`,
                                top:  `${this.state.lensPositionY}px`
                            }}

                        ></div>
                    }


           

                </div>
            </>

        );
    }

    getCursorPos = (e) => {
        const imageRef = this.imageRef.current;

        let x = 0, y = 0;

        /* Calculate the cursor's x and y coordinates, relative to the image: */
        const currentImagePosition = imageRef.getBoundingClientRect();

        x = e.pageX - currentImagePosition.left;
        y = e.pageY - currentImagePosition.top;

        /* Consider any page scrolling: */
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;

        return {
            x: x, y: y
        };
    }

    setLensPosition = (e) => {

        const imageRef = this.imageRef.current;

        /* Get the lens box container size */
        const lensBoxWidth = this.state.lensBoxWidth;
        const lensBoxHeight = this.state.lensBoxHeight;


        /* Max Width and Height of the image offset the lens box */
        const maxImageWidthOffSetLens = imageRef.width - lensBoxWidth;
        const maxImageHeightOffSetLens = imageRef.height - lensBoxHeight;


        /* Get the cursor's x and y positions: */
        let x = 0, y = 0;
        const cursorPosition = this.getCursorPos(e);

        /* Calculate the position of the lens: */
        x = cursorPosition.x - (lensBoxWidth / 2);
        y = cursorPosition.y - (lensBoxHeight / 2);

        /* Prevent the lens from being positioned outside the image */
        if (x > maxImageWidthOffSetLens) {
            x = maxImageWidthOffSetLens;
        }

        if (y > maxImageHeightOffSetLens) {
            y = maxImageHeightOffSetLens;
        }

        if (y < 0) {
            y = 0;
        }

        if (x < 0) {
            x = 0;
        }

        /* If cursor is out of the image */
        if ((x <= 0 || x >= maxImageWidthOffSetLens) || (y <= 0 || y >= maxImageHeightOffSetLens)) {
            this.setState({
                isImageMagnifierActive: false
            });
            return;
        }

        this.setState({
            lensPositionX:                         x,
            lensPositionY:                         y,
            imageZoomContainerBackgroundPositionX: -(x * this.state.imageZoomContainerRatioX),
            imageZoomContainerBackgroundPositionY: -(y * this.state.imageZoomContainerRationY)
        });


    }

    onMouseMoveImageZoom = (e) => {

        this.setState({
            isImageMagnifierActive: true
        });

        e.preventDefault();

        // Get the position of the cursor
        this.setLensPosition(e);
    }
}

export default ComponentPage;