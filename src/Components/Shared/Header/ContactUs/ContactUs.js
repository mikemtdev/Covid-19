import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import './Contactus.css'



const ContactUs = () => {
    return (

        <div className='Contact-Comp'>
            <h1>Constact us</h1>
            <form className = 'send-form'>
            	<p>Mikemnjovu@gmail.com</p>
            	<a href = '#'>Facebook</a>
            	<a href = '#'>Twitter</a>
            	<a href = '#'>Instagram</a>
            	<p><i> or </i></p>
            	<input type = "email" className = 'form-input' placeholder = "Send us an Email" />
            
            	<button className = 'send-btn'>Send</button>
            </form>

        </div>
    )
}

export default ContactUs;