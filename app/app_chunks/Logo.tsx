import React from "react";
import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={"/Logo2.png"} width={170} height={20} alt={"Logo"} />
    </Link>
  );
};

export default Logo;
