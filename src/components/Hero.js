import React from 'react'
const Hero = () => {
    return (
        <div className="wrapper">
            <div className="slider">
                <div className="slider-text">
                    <h1>Pink Rose</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <div className="slider-button">
                        <button className="slider_read_more_btn">READ MORE</button>
                        <button className="slider_shop_now_btn">SHOP NOW</button>
                    </div>
                </div>
                <div className="slider-image" style={{background:`url(images/slider-image.png) no-repeat`}}>
                </div>
            </div>
        </div>
    )
}

export default Hero
