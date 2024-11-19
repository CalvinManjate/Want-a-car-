import React from 'react';
import './App.css'

import { Link } from 'react-router-dom';

const TipsandHints = [{
    id: 1,
    title: "More Trust",
    link: 'https://www.wantacar.co.za/home',
    description: 'Trust the expert to service or repair your car or bakkie'
}];

function TipsandHint() {
    return (
        <div className='tips'>
            {TipsandHints.map(({ id, title, link,description }) => (
                <div key={id} className='tip-item'>
                    <h2>{title} <span>More Drive</span></h2>
                    <p>{description}</p>
                    <Link to="/about" className='tip-link'd>
                   Learn More
                    </Link>
                    
                   
                </div>
            ))}
        </div>
    );
}

export default TipsandHint;
