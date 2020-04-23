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
    expect(backGroundColorInput.value).toBe("purple");
    expect(widthInput.value).toBe("400");
    expect(heightInput.value).toBe("12");
})

// const testFormData = { backgroundColor: "blue", width: 100, height: 100};
// test("handleSubmit: adds box to page that matches submssion and resets form", function(){
//     const{ container, getByLabelText } = render(< NewBoxForm />);

//     const backGroundColorInput = getByLabelText("Color:");
//     const widthInput = getByLabelText("Width:");
//     const heightInput = getByLabelText("Height:");

//     fireEvent.change(backGroundColorInput, { target: {value: "purple"}});
//     fireEvent.change(widthInput, { target: {value: "400"}});
//     fireEvent.change(heightInput, { target: {value: "12"}});
//     fireEvent.submit(container.querySelector('form'));
    
//     const newBox = container.querySelector('.colored-box');
//     console.log(`\n\n\n The value of newBox is `, newBox);

//     expect(newBox).toContainHTML(testFormData);
// })