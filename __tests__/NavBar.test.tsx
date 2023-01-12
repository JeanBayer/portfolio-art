import { render } from "@testing-library/react";
import { NavBar } from "../components/navbar/NavBar";
import styles from "../components/navbar/index.module.css"

describe("NavBar", () => {
  it("El componente es renderizado correctamente", () => {
    const { container } = render(<NavBar />);
    expect(container).toBeInTheDocument();
  });

  it("Se renderizan los enlaces de navegación correctamente", () => {
    const { container } = render(<NavBar />);
    const navigationLinks = container.getElementsByClassName(`${styles.container}`)
    expect(navigationLinks.length).toBe(4);
  });
});
