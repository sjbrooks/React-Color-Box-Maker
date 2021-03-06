import React, { useState } from "react";
// import Box from "./Box";

/** Form for creating a new box in BoxList. Recieves addBox from parent BoxList.
 *
 * Has state for the backgroundColor, width, and height of the box; on submission,
 * sends {backgroundColor, width, height} to fn rec'd from parent.
 *
 */

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = { backgroundColor: "", width: 0, height: 0};
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
    const { name, value} = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
    // NOTE: why was name an array again? 
    // **computing key on the fly!**
  };

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
