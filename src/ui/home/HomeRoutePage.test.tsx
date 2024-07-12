import { HomeRoutePage } from "@/ui/home/HomeRoutePage";
import { render, screen } from "@testing-library/react";

test("should show Hello World!", () => {
  render(<HomeRoutePage />);
  expect(screen.getByText(/hello world!/i)).toBeInTheDocument();
});
