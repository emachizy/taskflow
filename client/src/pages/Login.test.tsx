// Login.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";
import { Provider } from "react-redux";
import store from "../store";

test("Login button should be clickable", () => {
  render(
    <Provider store={store}>
      <Login />
    </Provider>
  );

  const button = screen.getByText(/Login/i); // Find the login button
  expect(button).toBeInTheDocument(); // Check if the button exists

  fireEvent.click(button); // Simulate a button click
  // Check if the login action is dispatched, or if any expected behavior occurs
});
