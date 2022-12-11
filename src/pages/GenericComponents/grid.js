import './grid.css'
import React from 'react'

export default function grid(props) {
	const cells = props.arrOfObj.map(obj => 
    	<div className="grid-item">{obj}</div>);
  	return <div className="grid-container">
      		{cells}
    	</div>;
}
