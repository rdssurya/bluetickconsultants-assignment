import React from 'react';
import "../Styles/Card.css";

const Card = (props) => {
  return (
    <div className='card-content'>
        <span className='heading'>{props.heading}</span>
        <span className='content'>{props.content}</span>
        {props.url && <span className='read-button' onClick={()=>window.open(props.url)}>
                <b>Learn More</b>
            </span>}
    </div>
  );
};

export default Card;