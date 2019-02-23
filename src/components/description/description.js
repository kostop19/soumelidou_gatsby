import React from 'react';
import './description.css'
const Description = ({title, children}) => { 
    return ( 
        <div className="description-container">
            <h3 className="description-title">{title}</h3>
            <div style={{width:"45px",backgroundColor:"black",height:"2px",marginBottom:"1em"}}></div>
            <p className="description-content">
                { children }
            </p>
        </div>
    )
}

export default Description