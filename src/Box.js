import React from "react";
import "./Box.css";

/** A single colored box used in the BoxList and NewBoxForm components.
 **/

function Box({ backgroundColor, width, height, id, remove }) {

  function handleRemove(evt){
    remove(evt.target)

  }

  const styles = {
    backgroundColor,
    width: `${width}px`,
    height: `${height}px`
  }

  return (
  <div onClick={handleRemove} className="colored-box" id={id} style={styles}>
    X
  </div>
  )
}

export default Box;
