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
                            <span className={styles.email}>
                                <Image src="/assets/email-white.png" alt="email" layout="fill" priority />
                            </span>
                            <span className={styles.email}>
                                <Image src="/assets/email-orange.png" alt="email" layout="fill" priority />
                            </span>
                            sabarros.manuel@gmail.com
                        </a>
                    </div>
                </div>
                <div>
                    <p>You can also find me on</p>
                    <div>
                        <a href="https://github.com/manusabarros" target="_blank" rel="noopener noreferrer">
                            <span className={styles.github}>
                                <Image src="/assets/github-white.png" alt="github" layout="fill" priority />
                            </span>
                            <span className={styles.github}>
                                <Image src="/assets/github-orange.png" alt="github" layout="fill" priority />
                            </span>
                            @manusabarros
                        </a>
                    </div>
                    <div>
                        <a href="https://linkedin.com/in/manuel-sabarros" target="_blank" rel="noopener noreferrer">
                            <span className={styles.linkedin}>
                                <Image src="/assets/linkedin-white.png" alt="linkedin" layout="fill" priority />
                            </span>
                            <span className={styles.linkedin}>
                                <Image src="/assets/linkedin-orange.png" alt="linkedin" layout="fill" priority />
                            </span>
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
