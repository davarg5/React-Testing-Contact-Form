import React from 'react';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactForm from './ContactForm';

test('renders ContactForm without error', () => {
    render(<ContactForm />);
})



test('user can fill out and submit form', async () => {
    render(<ContactForm />);

    //set the inputs to values
    const firstNameInput = screen.getByLabelText(/first name*/i);
    const lastNameInput = screen.getByLabelText(/last name*/i);
    const emailInput = screen.getByLabelText(/email*/i);
    const messageInput = screen.getByLabelText(/message*/i);

    //fill out the inputs 
    fireEvent.change(firstNameInput, { target: { value: 'Dan', name: 'firstName'}});
    fireEvent.change(lastNameInput, { target: { value: 'Vargas', name: 'firstName'}});
    fireEvent.change(emailInput, { target: { value: 'davarg5@yahoo.com', name: 'email'}});
    fireEvent.change(messageInput, { target: { value: 'hello', name: 'message'}});

    //submit form
    const button = screen.getByRole('button');
    fireEvent.click(button);

    //Check that text is on the screen
    await waitFor(() => {
        const firstNameText = screen.getByText(/dan/i);
        expect(firstNameText).toBeTruthy();
        const lastNameText = screen.getByText(/vargas/i);
        expect(lastNameText).toBeTruthy();
        const emailText = screen.getByText(/davarg5@yahoo.com/i);
        expect(emailText).toBeTruthy();
        const messageText = screen.getByText(/hello/i);
        expect(messageText).toBeTruthy();
    })

})

test('input labels are rendered', () => {
    render(<ContactForm />);

    const firstName = screen.getByText(/first name*/i);
    const lastName = screen.getByText(/last name*/i);
    const email = screen.getByText(/email*/i);
    const message = screen.getByText(/message/i);

    expect(firstName).toBeTruthy();
    expect(lastName).toBeTruthy();
    expect(email).toBeTruthy();
    expect(message).toBeTruthy();

})