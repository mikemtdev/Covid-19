import React, { Component } from 'react';
import './Infolinks.css'

const Infolinks = () => {
    return (
        <div className = 'infolinks-Container'>
            <div className = 'infolinks-item'>
                <ul className='infolinks-list'>
                    <li>
                        <a href='#'>What is Covid-19?</a>
                    </li>
                    <li>
                        <a href='#'>How is it spread?</a>
                    </li>
                    <li>
                        <a href='#'>How do you prevent Covid-19?</a>
                    </li>
                    <li>
                        <a href='#'> Where did it come from?</a>
                    </li>
                </ul>
            </div>

            <div className = 'infolinks-item '>
                <ul className='infolinks-list'>
                    <li>
                        <a href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters'>Mythbusters</a>
                    </li>
                </ul>
            </div>

            <div className = 'infolinks-item' >
                <ul className='infolinks-list'>
                    <li>
                        <a href='#'>Who Daily report</a>
                    </li>
                    <li>
                        <a href='#'>Other news</a>
                    </li>
                    <li>
                        <a href='#'></a>
                    </li>
                    <li>
                        <a href='#'>About us</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Infolinks;