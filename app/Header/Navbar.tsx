"use client";
import React, { useState } from "react";
import Logo from "../app_chunks/Logo";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <header className=" bg-[#000000] ">
      <div className="flex justify-between py-3 items-center container mx-auto">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
