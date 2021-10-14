import React from 'react'

const Testimonial = () => {
    return (
        <div className="wrapper">
            <div className="testimonial-description">
                <h3>Testimonial</h3>
                <h2>Our Clients Expressions</h2>
                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <div className="testimonial-client-review">
                <div className="client-img">
                    <img src="images/client-1.png"/>
                </div>
                <div className="client-review">
                    <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchangedIt has survived not only five centuries, but also the leap into electronic typesetting.</p>
                    <h5>Rose William</h5>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
