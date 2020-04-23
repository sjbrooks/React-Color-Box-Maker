import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuid } from 'uuid';

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  // function to pass down to Box as a prop to remove the box upon click of a button
  function remove(box) {
    console.log('Made It into REMOVE in BoxList')
    console.log(`\n\n\n The value of box is `, box);
    let boxToRemoveID = box.id;
    console.log(`\n\n\n The value of box.id is `, box.id);
    setBoxes(boxes.filter(b => b.id !== boxToRemoveID));
  }

  // const remove = box => {

  // };

  const renderBoxes = () => {
    return (
      <div>
        {boxes.map(box => (
          <div>
            <Box key={box.id} id={box.id} backgroundColor={box.backgroundColor} width={box.width} height={box.height} remove={remove} />
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
