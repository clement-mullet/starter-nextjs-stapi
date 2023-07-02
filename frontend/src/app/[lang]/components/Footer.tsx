"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import { CgWebsite } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

interface FooterLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  social?: string;
}

interface CategoryLink {
  id: string;
  attributes: {
    name: string;
    slug: string;
  };
}

function FooterLink({ url, text }: FooterLink) {
  const path = usePathname();
  return (
    <li>
      <Link href={url}>{text}</Link>
    </li>
  );
}

function RenderSocialIcon({ social }: { social: string | undefined }) {
  switch (social) {
    case "WEBSITE":
      return <CgWebsite />;
    case "TWITTER":
      return <AiFillTwitterCircle />;
    case "YOUTUBE":
      return <AiFillYoutube />;
    case "DISCORD":
      return <FaDiscord />;
    default:
      return null;
  }
}

export default function Footer({
  logoUrl,
  logoText,
  menuLinks,
  legalLinks,
  socialLinks,
}: {
  logoUrl: string | null;
  logoText: string | null;
  menuLinks: Array<FooterLink>;
  legalLinks: Array<FooterLink>;
  socialLinks: Array<FooterLink>;
}) {
  return (
    <footer>
      <div>
        <div>
          <Logo src={logoUrl}>{logoText && <h2>{logoText}</h2>}</Logo>
        </div>
        <div>
          <p>Menu</p>
          <ul>
            {menuLinks.map((link: FooterLink) => (
              <FooterLink key={link.id} {...link} />
            ))}
          </ul>
        </div>
      </div>
      <div>
        <span>©{new Date().getFullYear()} All rights reserved</span>
        <ul>
          {legalLinks.map((link: FooterLink) => (
            <Link href={link.url} key={link.id}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      {/* {socialLinks.map((link: FooterLink) => {
        return (
          <a
            key={link.id}
            rel="noopener noreferrer"
            href={link.url}
            title={link.text}
            target={link.newTab ? "_blank" : "_self"}
          >
            <RenderSocialIcon social={link.social} />
          </a>
        );
      })} */}
    </footer>
  );
}
