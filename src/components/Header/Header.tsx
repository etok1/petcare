import { NavLink } from "react-router-dom";
import styles from "./style.module.css";
import Desktop from "./Desktop/Desktop";
import Mobile from "./Mobile/Mobile";
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
    <header className={styles.header}>
      <NavLink to="/">
        <img src="/logo.png" alt="logo" />
      </NavLink>
     {windowWidth > 950 ?  <Desktop/> : <Mobile/>}
    </header>
  );
}
