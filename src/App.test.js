import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders quote text element", () => {
  render(<App />);
  const quoteElement = screen.getByTestId(/quote-box/i);
  expect(quoteElement).toBeInTheDocument();
});

test("quote element contains some text", () => {
  render(<App />);
  const quoteElement = screen.getByTestId(/quote-box/i);
  expect(quoteElement).not.toHaveTextContent("");
});
