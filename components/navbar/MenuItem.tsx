import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

type MenuItemProps = {
  logo: StaticImageData;
  title: string;
  link: string;
};

export const MenuItem = ({ logo, title, link }: MenuItemProps) => {
  return (
    <li className={styles.container}>
      <Link href={link} className={styles.itemContainer}>
        <Image src={logo} alt={title} />
        <span className={styles.itemTitle}>{title}</span>
      </Link>
    </li>
  );
};
