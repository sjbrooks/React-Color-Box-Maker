import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList"

function addBox(boxList, height = "256", width = "256", backgroundColor = "orange") {
    const heightInput = boxList.getByLabelText("Height:");
    const widthInput = boxList.getByLabelText("Width:");
    const backgroundInput = boxList.getByLabelText("Color:");
  
    fireEvent.change(backgroundInput, { target: { value: backgroundColor } });
    fireEvent.change(widthInput, { target: { value: width } });
    fireEvent.change(heightInput, { target: { value: height } });
    const button = boxList.getByText("Add a new box!");
    fireEvent.click(button);
  }
  

test('renders BoxList without crashing', () => {
    render(< BoxList />)
});


test("snapshot:  renders Box List Page each time", function(){
    const{asFragment} = render(<BoxList/>);
    expect(asFragment()).toMatchSnapshot();
})

test("addBox adds box to BoxList ", function(){
    const boxList = render(<BoxList />)
    addBox(boxList);

    expect()
})






