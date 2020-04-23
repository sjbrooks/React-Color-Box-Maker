import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm"


test('renders NewBoxForm without crashing', () => {
    render(< NewBoxForm />)
});


test("snapshot:  renders same form each time", function(){
    const{asFragment} = render(<NewBoxForm/>);
    expect(asFragment()).toMatchSnapshot();
})

test('handleChange: can update values for all form fields after form input is changed', function(){
    const{ getByLabelText } = render(< NewBoxForm />);
    const backGroundColorInput = getByLabelText("Color:");
    const widthInput = getByLabelText("Width:");
    const heightInput = getByLabelText("Height:");

    fireEvent.change(backGroundColorInput, { target: {value: "purple"}});
    fireEvent.change(widthInput, { target: {value: "400"}});
    fireEvent.change(heightInput, { target: {value: "12"}});
    
    // QUESTION: we have type:"number" in input tag, but received STRING
    // the way inputs work is that they are always text
    // type just means that when you're rending that input it may have a different UI
    expect(backGroundColorInput.value).toBe("purple");
    expect(widthInput.value).toBe("400");
    expect(heightInput.value).toBe("12");
})