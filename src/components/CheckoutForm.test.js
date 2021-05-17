import React from "react";
import { render, screen} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);

    const header = screen.getByText(/checkout form/i);
    expect(header).toHaveTextContent('Checkout Form');
});



test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);

    const { getByLabelText } = screen;

    const firstName=getByLabelText(/first name/i);
    userEvent.type(firstName, 'Erica');
    expect(firstName).toHaveValue('Erica');

    const lastName=getByLabelText(/last name/i);
    userEvent.type(lastName, 'Leonard');
    expect(lastName).toHaveValue('Leonard');

    const address=getByLabelText(/address/i);
    userEvent.type(address, '123 My Way');
    expect(address).toHaveValue('123 My Way');

    const city=getByLabelText(/city/i);
    userEvent.type(city, 'Here');
    expect(city).toHaveValue('Here');

    const state=getByLabelText(/state/i);
    userEvent.type(state, 'Liquid');
    expect(state).toHaveValue('Liquid');

    const zip=getByLabelText(/zip/i);
    userEvent.type(zip, '12345');
    expect(zip).toHaveValue('12345');

    const button=screen.getByRole('button');
    userEvent.click(button);

    const success=screen.getByText(/you have ordered/i);
    expect(success).toBeInTheDocument();


});
