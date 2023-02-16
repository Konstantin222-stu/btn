import close from './close.png';
import home from './home.png';
import menu from './menu.png';
import search from './search.png';
import settings from './settings.png';
import React from "react";
import './Button.css';

export default (props)=>(
    <button className={props.variant}>
        <img src={"button/" +props.img +".png"}></img>Default
        </button>
    
)