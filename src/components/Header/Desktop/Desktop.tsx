import { NavLink } from "react-router-dom";
import styles from "./style.module.css";
import { Instagram, Search } from "lucide-react";

export default function Desktop() {
    return(
        <>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                <li>
                    <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? styles.active : "")}
                    >
                    Главная
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/help"
                    className={({ isActive }) => (isActive ? styles.active : "")}
                    >
                    О нас
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/pets"
                    className={({ isActive }) => (isActive ? styles.active : "")}
                    >
                    Животные
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/faq"
                    className={({ isActive }) => (isActive ? styles.active : "")}
                    >
                    FAQ
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/reviews"
                    className={({ isActive }) => (isActive ? styles.active : "")}
                    >
                    Отзывы
                    </NavLink>
                </li>
                </ul>
            </nav>
            <div className={styles.btns}>
                <NavLink to=""><button className="button"><Instagram size={20} />Instagram</button></NavLink>
                <NavLink to=""><button className="button"><Search size={20} /> Поиск питомцев</button></NavLink>
            </div>
        </>
    )
}