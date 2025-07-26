import React from "react";
import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={"/Logo.png"} width={170} height={20} alt={"Logo"} />
    </Link>
  );
};

export default Logo;
