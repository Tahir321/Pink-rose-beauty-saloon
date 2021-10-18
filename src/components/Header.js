import React from 'react'

const Header = () => {
    return (
        <div className="wrapper">
            <nav>
                <input type="checkbox" id="check" />
                <label for="check" className="checkbtn">
                    <i class="fas fa-bars"></i>
                </label>
                <label className="logo">
                    <img src="images/logo.png" />
                </label>
                <ul>
                    <li><a href="#" className="active">Home</a></li>
                    <li><a href="#" className="active">Shop</a></li>
                    <li><a href="#" className="active">About</a></li>
                    <li><a href="#" className="active">Contact</a></li>
                    <li><a href="#" className="active">Services</a></li>
                    <li><a href="#" className="active">Cart</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
