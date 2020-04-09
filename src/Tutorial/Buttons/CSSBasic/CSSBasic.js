import React from "react";
import PropTypes from "prop-types";
import styles from "./CSSBasic.module.scss";

/**
 * Until now, I used CSS in a messy way just for exemple. Now, we gonna try to do something a little more clean. Objective: make a unique button which can have several sizes.
 *
 * @visibleName Fashion SCSS Button
 */

const CSSButton = (props) => {
  const style = {
    padding: CSSButton.sizes[props.size],
    color: CSSButton.color
  };

  /**
   * what you want the button to do.
   */
  const doSmthg = () => {
    /**  */
    console.log("hey ya you!");
  };

  return (
    <button style={style} className={styles.btn} onClick={() => doSmthg()}>
      {props.text}
    </button>
  );
};

CSSButton.propTypes = {
  /** Text content belonging to the button */
  text: PropTypes.string,

  /** Color used for background and border */
  color: PropTypes.string,

  /** What happened when you click */
  onClick: PropTypes.func,

  /** The size or your button. */
  size: PropTypes.oneOf(["S", "M", "L"]),
};

CSSButton.defaultProps = {
  text: "This is me : button !",
  size: "S",
};

CSSButton.sizes = {
  S: "1em",
  M: "1.5em",
  L: "2em",
};

export default CSSButton;
