"use client";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
}

function NavLink({ url, text }: NavLink) {
  const path = usePathname();

  return (
    <li className="flex">
      <Link href={url}>{text}</Link>
    </li>
  );
}

export default function Navbar({
  links,
  logoUrl,
  logoText,
}: {
  links: Array<NavLink>;
  logoUrl: string | null;
  logoText: string | null;
}) {
  return (
    <header>
      <div>
        <Logo src={logoUrl}>{logoText && <h2>{logoText}</h2>}</Logo>
      </div>
      <div>
        <ul>
          {links.map((item: NavLink) => (
            <NavLink key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </header>
  );
}
