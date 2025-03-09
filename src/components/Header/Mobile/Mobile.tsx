import { NavLink } from "react-router-dom";
import styles from "./style.module.css";
import { Instagram, Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Mobile() {
const [isOpen, setIsOpen] = useState(false)



const handleClick = () => {
    setIsOpen(prev => !prev);
};
  
  return (
    <>
    <div className={styles.btns} onClick={handleClick}>
      {isOpen ? <X className={styles.xBtn} size={30} color={"#059669"} /> : <Menu className={styles.menuBtn} size={30} color={"#059669"} />}
    </div>

    <div className={`${styles.links} ${isOpen ?styles.open : ""}`}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li><NavLink to="/" onClick={() => setIsOpen(false)}>Главная</NavLink></li>
          <li><NavLink to="/help" onClick={() => setIsOpen(false)}>О нас</NavLink></li>
          <li><NavLink to="/pets" onClick={() => setIsOpen(false)}>Животные</NavLink></li>
          <li><NavLink to="/faq" onClick={() => setIsOpen(false)}>FAQ</NavLink></li>
          <li><NavLink to="/reviews" onClick={() => setIsOpen(false)}>Отзывы</NavLink></li>
        </ul>
      </nav>
      <div className={styles.btnsMedia}>
        <button className={`${styles.btnMedia} button`}>
            <Instagram size={20} />
            <span>Instagram</span>
        </button>
        <button className={`${styles.btnMedia} button`}>
            <Search size={20} />
            <span>Поиск питомцев</span>
        </button>
      </div>
    </div>
  </>
  );
}