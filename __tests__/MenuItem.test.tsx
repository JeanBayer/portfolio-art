import { fireEvent, render, screen } from "@testing-library/react";
import { MenuItem } from "../components/navbar/MenuItem";
import about from "../public/about.png";

describe("MenuItem", () => {
  it("Se renderiza correctamente el componente", () => {
    const { container } = render(
      <MenuItem logo={about} title="hola" link="/" />
    );
    expect(container).toBeInTheDocument();
  });

  it("Se renderiza correctamente el title", () => {
    render(<MenuItem logo={about} title="hola" link="/" />);
    expect(screen.getByText("hola")).toBeInTheDocument();
  });

  it("Se renderiza correctamente el logo", () => {
    render(<MenuItem logo={about} title="hola" link="/" />);
    expect(screen.getByAltText("hola")).toBeInTheDocument();
  });

  it("El link redirecciona correctamente según el link dado", () => {
    const mockLink = "/mock-link";
    render(<MenuItem logo={about} title="hola" link={mockLink} />);

    const link = screen.getByTestId("menu-item-link");
    fireEvent.click(link);
    expect(link.getAttribute("href")).toBe("/mock-link");
  });
});
