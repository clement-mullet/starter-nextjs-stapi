import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Logo({
  src,
  children,
}: {
  src: string | null;
  children?: React.ReactNode;
}) {
  return (
    <Link href="/" aria-label="Back to homepage">
      {src && <Image src={src} alt="logo" width={45} height={45} />}
      <div>{children}</div>
    </Link>
  );
}
