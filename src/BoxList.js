import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuid } from 'uuid';

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  // function to pass down to Box as a prop to remove the box upon click of a button

  function remove(id) {
    setBoxes(oldBoxes => oldBoxes.filter(b => b.id !== id));
  }

  const renderBoxes = () => {
    return (
      <div>
        {boxes.map(box => (
          <div key={box.id}>
            <Box id={box.id} backgroundColor={box.backgroundColor} width={box.width} height={box.height} remove={remove} />
          </div>
        ))}
      </div>
    );
  };
  // end renderBoxes

  /** Add new box to BoxList. */
  const addBox = box => {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  };
  // end addBox

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      {renderBoxes()}
    </div>
  );
};
// end

export default BoxList;
