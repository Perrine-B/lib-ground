import React from "react";
import PropTypes from 'prop-types';

/**
 * Hello ! There I'm speaking from js file comments. It is useful when you will have some things to explain and you want it to appear on the top on the section, especially when we gonna add and document some props and methods (Damned ! It's happening now !) related to our components.
 * Ok, let's do something a little more realistic. 
 * @visibleName The Basic button (for real)
 */

const ColorBasic = (props) => {

/**
 * what you want the button to do.
 */
    const doSmthg = () => {
        /**  */
        console.log('hey ya you!')
    }

    return (
    <button 
    style = 
    {{backgroundColor: `${props.color}`, 
    padding: '1em', 
    border: '1px solid', 
    borderColor: `${props.color}`, 
    borderRadius: '.5em', 
    color: 'white'}}
    
    onClick={() => doSmthg()}>
        {props.text}
        </button>)
} 



ColorBasic.propTypes = {
    /** Text content belonging to the button */
    text: PropTypes.string,
  
    /** Color used for background and border */
    color: PropTypes.string,
  
    /** What happened when you click */
    onClick: PropTypes.func
};


export default (ColorBasic);