/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { expect, test } from "@jest/globals";

test("renders app component text", () => {
  render(<App />);
  const linkElement = screen.getByText(/hello react/i);

  expect(linkElement).toBeInTheDocument();
});
