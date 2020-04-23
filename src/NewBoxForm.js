import React, { useState } from "react";
// import Box from "./Box";

/** Form for creating a new box in BoxList. Recieves addBox from parent BoxList.
 *
 * Has state for the backgroundColor, width, and height of the box; on submission,
 * sends {backgroundColor, width, height} to fn rec'd from parent.
 *
 */

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = { backgroundColor: "blue", width: 100, height: 100};
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send {backgroundColor, width, height} to parent
   *    & clear form. */

  const handleSubmit = evt => {
    evt.preventDefault();
    addBox(formData);
    setFormData(INITIAL_STATE);
  };

  /** Update local state w/curr state of input elem */

  const handleChange = evt => {
    const { backgroundColor, width, height } = evt.target;
    setFormData(fData => ({
      ...fData,

      // NOTE: each of these keys originally looked like arrays
      backgroundColor: backgroundColor,
      width: width,
      height: height
    }));
  };

  /** render form */

  console.log(`\n\n\n The value of formData is `, formData, '\n\n\n');
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="backgroundColor">Color:</label>
      <input
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />

      <label htmlFor="width">Width:</label>
      <input
        type="number"
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />
      
      <label htmlFor="height">Height:</label>
      <input
        type="number"
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <button>Add a new box!</button>
    </form>
  );
};

export default NewBoxForm;
