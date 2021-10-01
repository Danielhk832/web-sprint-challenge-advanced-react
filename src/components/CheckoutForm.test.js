import React from "react";
import MutationObserver from "mutationobserver-shim";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm />);
});

test("shows success message on submit with form details", async () => {
  render(<CheckoutForm />);
  const firstName = screen.queryByLabelText(/first name:/i);
  const lastName = screen.queryByLabelText(/last name:/i);
  const address = screen.queryByLabelText(/address:/i);
  const city = screen.queryByLabelText(/city:/i);
  const state = screen.queryByLabelText(/state:/i);
  const zip = screen.queryByLabelText(/zip:/i);
  const button = screen.getByRole("button");

  userEvent.type(firstName, "Daniel");
  userEvent.type(lastName, "kish");
  userEvent.type(address, "4410 Danbury lane");
  userEvent.type(city, "Sugar Land");
  userEvent.type(state, "Texas");
  userEvent.type(zip, "77479");
  userEvent.click(button);

  const successMessage = await screen.queryByTestId(/successMessage/i);

  expect(successMessage).toBeInTheDocument();
});
