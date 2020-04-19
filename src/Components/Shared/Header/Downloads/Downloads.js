import React from 'react';
import './Downloads.css'

const Downloads = () => {
	
    let protoLinks = [ 'https://google.com', 'https://duckduckgo.com', 'https://facebook.com']
    let idNum = 1;
    return (

        <div className='Downloads-Comp'>
            
            <ul className="download-list">
            <h1 className = 'Headers'>Reports </h1>
            	{protoLinks.map( link => 
            		<li className = 'linkIterm'>

            			<a href={link}>Report {idNum++} </a>
            		</li>
            		)}
            </ul>

        </div>
    )
}

export default Downloads;