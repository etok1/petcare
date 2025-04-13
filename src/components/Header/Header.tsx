import { NavLink } from "react-router-dom";
import React from 'react';
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import { useEffect, useState } from "react";

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
      const handleResize = () => {
          setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => {
          window.removeEventListener("resize", handleResize);
      };
  }, []);

  return (
    <header className=' font-comfortaa relative top-0 left-0 py-3 px-4 flex items-center justify-between z-[10000] bg-desktop border-b border-gray-300'>
      <NavLink to="/">
        <img src="/logo.webp" alt="logo" loading="lazy"  />
      </NavLink>
     {windowWidth > 950 ?  <Desktop/> : <Mobile/>}
    </header>
  );
}
