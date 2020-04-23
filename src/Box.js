import React from "react";
import "./Box.css";

/** A single colored box used in the BoxList and NewBoxForm components.
 **/

function Box({ backgroundColor, width, height, remove }) {

  const handleRemove = (evt) => (
    remove(evt.target)
  )

  const styles = {
    backgroundColor,
    width: `${width}px`,
    height: `${height}px`
  }

  return (
  <div className="colored-box" style={styles}>
    <button onClick={handleRemove}>X</button>
  </div>
  )
}

export default Box;
