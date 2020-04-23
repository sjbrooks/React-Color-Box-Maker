import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import uuid from "uuid/v4";

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  const remove = box => {
    let boxToRemoveID = box.id;
    setBoxes(boxes.filter(b => b.id !== boxToRemoveID));
  };

  const renderBoxes = () => {
    return (
      <div>
        {boxes.map(box => (
          <div>
            <Box backgroundColor={box.backgroundColor} width={box.width} height={box.height} remove={remove}/>
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
