import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Testing <Button />", () => {
  it("should render disabled button", () => {
    render(<Button text="Button" disabled />);
    expect(screen.getByRole("button", { name: "Button" })).toBeDisabled();
  });
});