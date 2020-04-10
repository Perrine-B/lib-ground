import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./MultipropsButton.module.scss";

/**
 *Now, we gonna melt all that stuff that we learn and make something that will look like a real component.
 *
 * @visibleName Multi props Button
 */

const MultipropsButton = (props) => {
  const [styleClass, setstyleClass] = useState(styles.btn);

  useEffect(() => {
    if (props.theme) {
      setstyleClass(`${styles.btn}, ${MultipropsButton.themes[props.theme]}`);
    }
  });

  const style = {
    padding: MultipropsButton.sizes[props.size],
    fontFamily: MultipropsButton.fonts[props.font],
  };

  /**
   * what you want the button to do.
   */
  const doSmthg = () => {
    /**  */
    console.log("hey ya you!");
  };

  return (
    <button style={style} className={styleClass} onClick={() => doSmthg()}>
      {props.text}
    </button>
  );
};

MultipropsButton.propTypes = {
  /** Text content belonging to the button */
  text: PropTypes.string,

  /** What happened when you click */
  onClick: PropTypes.func,

  /** The size or your button. */
  size: PropTypes.oneOf(["S", "M", "L"]),

  /** The font-style  or your button. */
  font: PropTypes.oneOf(["A", "B", "C"]),

  /** Your needed style */
  theme: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
};

MultipropsButton.defaultProps = {
  text: "This is me : button !",
  size: "S",
  font: "A",
};

MultipropsButton.sizes = {
  S: "0.5em",
  M: "0.8em",
  L: "1.1em",
};

MultipropsButton.fonts = {
  A: "cursive",
  B: "Walter Turncoat",
  C: "Dokdo",
  D: "Sue Ellen Francisco",
};

MultipropsButton.themes = {
  primary: styles.primary,
  secondary: styles.secondary,
  tertiary: styles.tertiary,
};

export default MultipropsButton;
