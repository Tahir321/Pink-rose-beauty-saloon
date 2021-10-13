import React from 'react'


const Overservices = () => {
    return (
        <div>
            <div className="wrapper">
                <div className="over-services-heading">
                    <h2>Our Services For You</h2>
                </div>
                <div className="os-text-and-images">
                    <div className="os-description-and-images-card">
                        <div className="os-description-card" style={{background:`url(images/pro.png) no-repeat`}}>
                            <div className="card-description">
                                <h2>Face massage</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                            </div>
                        </div>
                        <div className ="os-images">
                            <div className="os-small-images" style={{background :`url(images/img1.jpg)`}}></div>
                            <div className="os-small-images" style={{background :`url(images/img2.jpg)`}}></div>
                            <div className="os-small-images" style={{background :`url(images/img3.jpg)`}}></div>
                            <div className="os-small-images" style={{background :`url(images/img4.jpg)`}}></div>
                            <div className="os-small-images" style={{background :`url(images/img5.png)`}}></div>
                        </div>
                    </div>
                    <div className="os-main-descriptions">
                        <div className="os-description">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                            <ul>
                                <li>FACE MASSAGE</li>
                                <li>BODY MASSAGE</li>
                                <li>MAKEUP</li>
                                <li>HAIR TREATMENT</li>
                                <li>FACE MASSAGE</li>
                                <li>BODY MASSAGE</li>
                                <li>HAIR TREATMENT</li>
                                <li>FACE MASSAGE</li>
                                <li>BODY MASSAGE</li>
                            </ul>
                        </div>
                        <div className="os-btns">
                            <button className="os-more-detail-btn">MORE DETAIL</button>
                        </div>
                        <div>
                            <img className="bg-image2" src="images/bg2.png"/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default Overservices
