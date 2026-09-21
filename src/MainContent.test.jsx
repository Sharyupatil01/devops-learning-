import { render, screen } from "@testing-library/react";
import MainContent from "./MainContent";

test("renders the main content", () => {
  render(<MainContent />);

  expect(
    screen.getByRole("heading", {
      name: "Welcome to DevOps Learning",
    })
  ).toBeInTheDocument();
});