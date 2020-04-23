import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from "@testing-library/react";
import Box from "./Box"

const testBox = < Box backgroundColor="cornflower" width="150" height="150"/>

test('renders Box without crashing ', () => {
    render(< Box />)
});

test("snapshot:  renders same testBox each time", function(){
    const{asFragment} = render(testBox);
    expect(asFragment()).toMatchSnapshot();
})

