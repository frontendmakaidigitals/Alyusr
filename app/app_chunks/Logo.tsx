import React from "react";
import Image from "next/image";
const Logo = () => {
  return (
    <div>
      <Image src={"/Logo.png"} width={170} height={20} alt={'Logo'} />
    </div>
  );
};

export default Logo;
