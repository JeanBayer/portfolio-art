import { render, screen } from "@testing-library/react";

describe("prueba", () => {
  it("hola", () => {
    render(<div>hola</div>);
    expect(screen.getByText("hola")).toBeInTheDocument();
  });
});
