import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App"; // Import the App component

test("basic test", () => {
  expect(true).toBe(true);
});

test("renders the header component", () => {
  render(<App />);
  expect(screen.getByText(/periodic table of elements/i)).toBeInTheDocument();
});

test("test initial state, renders with initial state not inverted", () => {
  render(<App />);
  const periodicTableComponent = screen.getByTestId("periodic-table");
  expect(periodicTableComponent).toHaveAttribute("data-inverted", "false");
});

test("toggles inversion state when 'Invert' button is clicked", () => {
  render(<App />);
  const invertButton = screen.getByRole("button", { name: /invert/i });
  fireEvent.click(invertButton);
  const periodicTableComponent = screen.getByTestId("periodic-table");
  expect(periodicTableComponent).toHaveAttribute("data-inverted", "true");
});

test("renders the header component", () => {
  render(<App />);
  expect(screen.getByText(/periodic table of elements/i)).toBeInTheDocument();
});

test("renders the PeriodicTable component", () => {
  render(<App />);
  const periodicTableComponent = screen.getByTestId("periodic-table");
  expect(periodicTableComponent).toBeInTheDocument();
});

test("passes inversion state to PeriodicTable component", () => {
  render(<App />);
  const invertButton = screen.getByRole("button", { name: /invert/i });
  fireEvent.click(invertButton);
  const periodicTableComponent = screen.getByTestId("periodic-table");
  expect(periodicTableComponent).toHaveAttribute("data-inverted", "true");
});
