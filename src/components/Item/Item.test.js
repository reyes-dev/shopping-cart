import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Item from "./Item";

describe("Item component", () => {
  it("renders 0", () => {
    const { container } = render(<Item />);
    expect(container).toMatchSnapshot();
  });

  it("renders 1 after button click", async () => {
    const user = userEvent.setup();

    render(<Item />);
    const button = screen.getByRole("button", { name: "+" });

    await user.click(button);

    expect(screen.getByTitle("item-count").textContent).toMatch("1");
  });

  it("renders 1 after incrementing twice, decrementing once", async () => {
    const user = userEvent.setup();

    render(<Item />);

    const incrementBtn = screen.getByRole("button", { name: "+" });
    const decrementBtn = screen.getByRole("button", { name: "-" });

    await user.click(incrementBtn);
    await user.click(incrementBtn);

    expect((await screen.findByTitle("item-count")).textContent).toMatch("2");

    await user.click(decrementBtn);

    expect((await screen.findByTitle("item-count")).textContent).toMatch("1");
  });
});
