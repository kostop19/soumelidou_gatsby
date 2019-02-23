import React from "react"
import './box.css'
const Box = ({image,title, description,backgroundColor}) => { 
    return (
        <div  className="box-container" style={{ backgroundColor:backgroundColor}}>
            <h3 className="box-title">/ {title} /</h3>
        </div>
    )
}

export default Box