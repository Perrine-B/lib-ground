import React from "react";
import PropTypes from 'prop-types';
import style from './CSSButton.module.scss';



/**
 * Until now, I used CSS in a messy way just for exemple. Now, we gonna try to do something a little more clean. Objective: make a unique button which can have several sizes.
 * 
 * @visibleName Fashion SCSS Button
 */

const CSSButton = (props) => {
console.log(style);

/**
 * what you want the button to do.
 */
    const doSmthg = () => {
        /**  */
        console.log('hey ya you!')
    }

    return (
    <button className={style.btn}
   
    
    onClick={() => doSmthg()}>
        {props.text}
        </button>)
        
} 



CSSButton.propTypes = {
    /** Text content belonging to the button */
    text: PropTypes.string,
  
    /** Color used for background and border */
    color: PropTypes.string,
  
    /** What happened when you click */
    onClick: PropTypes.func,

    /** The size or your button */
    size: PropTypes.string
};

CSSButton.defaultProps = {
    text: 'This is me : button !',
    color: 'red',
    size: 'M'
}


export default (CSSButton);