import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import RouteSwitch from "../../RouteSwitch";

test("should redirect to shopping page and update DOM", async () => {
  const user = userEvent.setup();
  render(<RouteSwitch></RouteSwitch>);
  const navBtn = screen.getByRole("link", { name: /SHOP/ });
  await user.click(navBtn);
  await waitFor(() => {
    expect(
      screen.getByRole("heading", { name: "Item Shop" })
    ).toBeInTheDocument();
  });
});

test("should redirect to cart page and update DOM", async () => {
  const user = userEvent.setup();
  render(<RouteSwitch></RouteSwitch>);
  const navBtn = screen.getByRole("link", { name: /CART/ });
  await user.click(navBtn);
  await waitFor(() => {
    expect(
      screen.getByRole("heading", { name: "Shopping Cart" })
    ).toBeInTheDocument();
  });
});
