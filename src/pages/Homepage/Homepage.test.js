import React from "react";
import { render, screen } from "@testing-library/react";
import Homepage from "./Homepage";

describe("Homepage component", () => {
  it("renders correct heading", () => {
    render(<Homepage />);
    expect(screen.getByRole("heading").textContent).toMatch(
      /Hey, there, fella! Welcome to the Odin Bros. Bazaar~~!/i
    );
  });
});
