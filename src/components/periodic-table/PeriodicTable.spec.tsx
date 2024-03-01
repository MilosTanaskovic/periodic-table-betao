import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import PeriodicTable from "./PeriodicTable";

test("renders the PeriodicTable component", () => {
  render(<PeriodicTable />);
  const periodicTableComponent = screen.getByTestId("periodic-table");
  expect(periodicTableComponent).toBeInTheDocument();
});

test("renders all periods and special rows correctly", () => {
  render(<PeriodicTable />);
  expect(screen.getByText(/Period 1/)).toBeInTheDocument();
  expect(screen.getByText(/Period 2/)).toBeInTheDocument();
  // Continue for all periods and special rows
  expect(screen.getByText(/Lanthanides/)).toBeInTheDocument();
  expect(screen.getByText(/Actinides/)).toBeInTheDocument();
});

test("reflects inversion state correctly", () => {
  const { rerender } = render(<PeriodicTable isInverted={false} />);
  expect(screen.getByTestId("periodic-table")).toHaveAttribute(
    "data-inverted",
    "false"
  );
  rerender(<PeriodicTable isInverted={true} />);
  expect(screen.getByTestId("periodic-table")).toHaveAttribute(
    "data-inverted",
    "true"
  );
});

test("displays period titles", () => {
  render(<PeriodicTable />);
  const periods = screen.getAllByRole("heading");
  expect(periods.some((p) => p.textContent === "Period 1")).toBe(true);
  // Continue checking for other periods
});
