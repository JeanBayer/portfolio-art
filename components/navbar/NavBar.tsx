import { MenuItem } from "./MenuItem";
import styles from "./index.module.css";
import about from "../../public/about.png";
import paints from "../../public/paints.png";
import accesories from "../../public/accesories.png";
import blogs from "../../public/blogs.png";

export const NavBar = () => {
  return (
    <nav className={styles.navigationContainer}>
      <MenuItem logo={about} title="About Me" link="/" />
      <MenuItem logo={paints} title="Paints" link="/paints" />
      <MenuItem logo={accesories} title="Accesories" link="/accesories" />
      <MenuItem logo={blogs} title="Blogs" link="/blog" />
    </nav>
  );
};
