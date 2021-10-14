import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="wrapper">
                <div className="f-logo-and-newsletter">
                    <div className="logo-and-newsletter">
                        <img src="images/logo.png" />
                        <h2>Want to get latest update and offers!</h2>
                        <p>Subscribe Our Newsletter Right Now</p>
                        <form method="post">
                            <input type="text" name="newsletter" placeholder="Enter Your Email Address" />
                            <button>SEND</button>
                        </form>
                    </div>
                    <div className="footer-detail">
                        <div className="f-contact-info">
                            <h3>Contact Info</h3>
                            <div className="f-address">
                                <h5>Address</h5>
                                <p>2365C, South City, Mian Town Brolex Tower, New York</p>
                            </div>
                            
                            <div className="f-phone">
                                <h5>Phone</h5>
                                <p>+02865346857</p>
                                <p>+02453434385</p>
                            </div>
                            
                            <div className="f-web-address">
                                <h5>Web</h5>
                                <p>pinkrose@gmail.com</p>
                                <p>www@example.com</p>
                            </div>
                        </div>
                        <div className="f-quick-links">
                            <h3>Quick Links</h3>
                            <div className="quick-links">
                                <ul>
                                    <li>About us</li>
                                    <li>Spa Services</li>
                                    <li>Treatment</li>
                                    <li>Product</li>
                                    <li>Our Experta</li>
                                    <li>Support</li>
                                </ul>
                            </div>
                        </div>
                        <div className="f-information">
                            <h3>Information</h3>
                            <div className="information-links">
                                <ul>
                                    <li>Terms & Conditions</li>
                                    <li>Book Online</li>
                                    <li>Spa Gift Card</li>
                                    <li>Offers & Events</li>
                                    <li>Purchase a Gift</li>
                                    <li>Card</li>
                                </ul>
                            </div>
                        </div>
                        <div className="f-opening-hour">
                            <h3>Opening Hour</h3>
                            <div className="f-timing1">
                                <h5>Monday to Friday</h5>
                                <p>9:00 am - 10:30 Pm</p>
                            </div>
                            
                            <div className="f-timing2">
                                <h5>Saturday to sunday</h5>
                                <p>11:00 am - 9:30 Pm</p>
                            </div>
                            
                            <div className="f-book-Now">
                                <h5>Book Now</h5>
                                <p>+123456890</p>
                            </div>
                        </div>
                        <div className="separation-line"></div>
                        <div className="f-contact-us">
                            <h3>Contact us</h3>
                            <form method="post">
                                <input type="text" name="newsletter" placeholder="Enter Your Email Address" />
                                <input type="text" name="newsletter" placeholder="Enter Your Number" />
                                <textarea type="text" placeholder="Message"></textarea>
                                <button>SEND</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="footer-copyright">
                    <div className="end-div">
                        <div className="copyright"><p><i class="far fa-copyright"></i>2021 <span>Peerly made with by Codecarrivalh</span></p></div>
                        <div className="social-links">
                            <h5>Socail Links</h5>
                            <i class="fab fa-facebook-square"></i>
                            <i class="fab fa-google-plus-square"></i>
                            <i class="fab fa-twitter-square"></i>
                            <i class="fab fa-snapchat-square"></i>
                            <i class="fab fa-youtube-square"></i>
                            <i class="fab fa-whatsapp-square"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
