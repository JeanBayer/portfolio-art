import Image from "next/image";
import Link from "next/link";

type MenuItemProps = {
  logo: string;
  title: string;
  link: string;
};

export const MenuItem = ({ logo, title, link }: MenuItemProps) => {
  return (
    <li>
      <Link href={link}>
        <span>{title}</span>
        <Image src={logo} alt={title} width={150} height={150} />
      </Link>
    </li>
  );
};
