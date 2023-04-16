import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Shop from "./Shop";

describe("Shop component", () => {
  it("renders item shop", () => {
    render(<Shop />);
    expect(screen.getByRole("heading").textContent).toMatch(/Item Shop/i);
  });

  it("renders all item components", () => {
    render(<Shop />);
    expect(screen.getAllByTestId("item-component")).toHaveLength(12);
  });

  it("renders 12 list items", () => {
    render(<Shop />);
    expect(screen.queryAllByRole("listitem")).toHaveLength(12);
  });
});
