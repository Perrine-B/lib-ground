import React from "react";
import PropTypes from "prop-types";
import styles from "./MultipropsButton.module.scss";

/**
 *Now, we gonna melt all that stuff that we learn and make something that will look like a real component. 
 *
 * @visibleName Multi props Button
 */

const MultipropsButton = (props) => {
  const style = {
    padding: MultipropsButton.sizes[props.size],
    color: MultipropsButton.color
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

MultipropsButton.propTypes = {
  /** Text content belonging to the button */
  text: PropTypes.string,

  /** Color used for background and border */
  color: PropTypes.string,

  /** What happened when you click */
  onClick: PropTypes.func,

  /** The size or your button. */
  size: PropTypes.oneOf(["S", "M", "L"]),
};

MultipropsButton.defaultProps = {
  text: "This is me : button !",
  size: "S",
};

MultipropsButton.sizes = {
  S: "0.5em",
  M: "0.8em",
  L: "1.1em",
};

export default MultipropsButton;
