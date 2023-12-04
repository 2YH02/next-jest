import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("should have text Docs", () => {
    render(<Home />);

    const el = screen.getByText("Docs");

    expect(el).toBeInTheDocument();
  });

  it("should have text Learn", () => {
    render(<Home />);

    const el = screen.getByText("Learn");

    expect(el).toBeInTheDocument();
  });

  it("should have text Templates", () => {
    render(<Home />);

    const el = screen.getByText("Templates");

    expect(el).toBeInTheDocument();
  });

  it("should have text Deploy", () => {
    render(<Home />);

    const el = screen.getByText("Deploy");

    expect(el).toBeInTheDocument();
  });
});
