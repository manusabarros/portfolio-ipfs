import styles from "./Footer.module.scss";
import { forwardRef } from "react";
import Image from "next/image";

const Footer = forwardRef((props: any, ref: any) => {
    return (
        <footer ref={ref} className={styles.Footer}>
            <div>
                <div>
                    <p>
                        If you want to know more about
                        <br />
                        me, send me an email at
                    </p>
                    <div>
                        <a href="mailto:sabarros.manuel@gmail.com">
                            <img src="/assets/email-white.png" alt="email" className={styles.email} />
                            <img src="/assets/email-orange.png" alt="email" className={styles.email} />
                            sabarros.manuel@gmail.com
                        </a>
                    </div>
                </div>
                <div>
                    <p>You can also find me on</p>
                    <div>
                        <a href="https://github.com/manusabarros" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/github-white.png" alt="github" className={styles.github} />
                            <img src="/assets/github-orange.png" alt="github" className={styles.github} />
                            @manusabarros
                        </a>
                    </div>
                    <div>
                        <a href="https://linkedin.com/in/manuel-sabarros" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/linkedin-white.png" alt="linkedin" className={styles.linkedin} />
                            <img src="/assets/linkedin-orange.png" alt="linkedin" className={styles.linkedin} />
                            /in/manuel-sabarros
                        </a>
                    </div>
                </div>
            </div>
            <span>v{process.env.NEXT_PUBLIC_VERSION}</span>
        </footer>
    );
});

export default Footer;
