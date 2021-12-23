import { useRef } from "react";
import styles from "./Header.module.scss";
import { Colors } from "../../pages/index";
import Link from "next/link";
import Image from "next/image";

const links = ["Home", "About", "Work", "Skills", "Contact"];

const Header = ({ onGoTo, color: backgroundColor }: any) => {
    const menuRef = useRef<HTMLDivElement>();

    const goTo = (link: any) => () => onGoTo(link);

    const closeMenu = () => {
        if (menuRef.current) {
            menuRef.current.classList.remove(styles.showMenu);
            menuRef.current.classList.add(styles.hideMenu);
            document.removeEventListener("click", closeMenu);
        }
    };

    const toggleMenu = () => {
        if (menuRef.current) {
            if (!menuRef.current.classList.value || menuRef.current.classList.contains(styles.hideMenu)) {
                menuRef.current.classList.remove(styles.hideMenu);
                menuRef.current.classList.add(styles.showMenu);
                setTimeout(() => document.addEventListener("click", closeMenu), 0);
            } else {
                menuRef.current.classList.remove(styles.showMenu);
                menuRef.current.classList.add(styles.hideMenu);
            }
        }
    };

    return (
        <header className={styles.Header} style={{ backgroundColor }}>
            <div className={styles.links}>
                <img src="/assets/menu.svg" alt="menu" onClick={toggleMenu} className={styles.image} />
                <div className={styles.menu}>
                    <div ref={menuRef}>
                        {links.map(link => (
                            <span key={link} onClick={goTo(link)}>
                                {link}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.name} style={{ color: backgroundColor === Colors.WHITE ? Colors.ORANGE : Colors.WHITE }}>
                <span>
                    manuel
                    <br />
                    sabarrós
                </span>
            </div>
            <div className={styles.languages}>
                <a href="https://manusabarros.com" target="_blank" rel="noopener noreferrer">
                    manusabarros.com
                </a>
            </div>
        </header>
    );
};

export default Header;
