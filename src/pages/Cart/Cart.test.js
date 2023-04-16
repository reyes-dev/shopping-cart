import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import RouteSwitch from "../../RouteSwitch";
import userEvent from "@testing-library/user-event";

describe("checks out item", () => {
  it("checks out item", async () => {
    const user = userEvent.setup();

    render(<RouteSwitch />);
    await user.click(screen.getByRole("link", { name: /SHOP/ }));
    await user.click(screen.getAllByRole("button", { name: "+" })[0]);
    await user.click(screen.getAllByRole("button", { name: "Add to Cart" })[0]);
    await user.click(screen.getByRole("link", { name: /CART/ }));
    await user.click(screen.getByRole("button", { name: "Checkout" }));

    await waitFor(() => {
      expect(
        screen.getByText("Thank you for your purchase!")
      ).toBeInTheDocument();
    });
  });
});
