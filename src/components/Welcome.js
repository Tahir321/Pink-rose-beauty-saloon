import React from 'react'


const welcome = () => {
    return (
        <div>
            <div>
                <div><img className="sbg-image" src="images/sbg.png"/></div>
                <div  className="wrapper">
                    <div className="welcome-section">
                        <h2>Welcome to Pink Rose</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className="welcome-description"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scra </p></div>
                    <div className="welcome-images">
                        <div className="natural">
                            <div className="welcome-card-image"><img src="images/w-natural.png"/></div>
                            <div className="welcome-card-description">
                                <h5>Natural</h5>
                                <p>Lorem Ipsum has been the industry's standard dummy</p>
                            </div>
                        </div>
                        <div className="massage-therapy">
                            <div className="welcome-card-image"><img src="images/w-natural.png" /></div>
                            <div className="welcome-card-description">
                                <h5>Massage Therapy</h5>
                                <p>Lorem Ipsum has been the industry's standard dummy</p>
                            </div>
                        </div>
                        <div className="skin-beauty-care">
                            <div className="welcome-card-image"><img src="images/w-natural.png" /></div>
                            <div className="welcome-card-description">
                                <h5>Skin Beauty and Care</h5>
                                <p>Lorem Ipsum has been the industry's standard dummy</p>
                            </div>
                        </div>
                    </div>
                    <div className="welcome-btn">
                        <div className="read-more-and-shop-btn">
                            <button className="welcome_read_more_btn">READ MORE</button>
                            <button className="welcome_more_detail_btn">MORE DETAIL</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default welcome
