import React from "react";
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  img?: string;
  width?: number;
  height?: number;
};

const Logo = ({ img = "/Logo2.webp", width = 160, height = 20 }: LogoProps) => {
  return (
    <Link href={"/"}>
      <Image src={img} width={width} height={height} alt="Logo" />
    </Link>
  );
};

export default Logo;
