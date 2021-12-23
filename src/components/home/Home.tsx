import styles from "./Home.module.scss";
import { forwardRef } from "react";
import Name from "../name/Name";
import Image from "next/image";

const Home = forwardRef((props: any, ref: any) => {
    return (
        <section className={styles.Home} ref={ref}>
            <div>
                <div className={styles.welcome}>
                    <div className={styles.text}>
                        <p className={styles.topText}>Hello! I&apos;m</p>
                    </div>
                    <Name />
                    <div className={styles.text}>
                        <p className={styles.bottomText}>
                            a <span>developer</span> based in Portugal
                        </p>
                    </div>
                </div>
                <div className={styles.gif}>
                    <div>
                        <img src="/assets/coffee.gif" alt="coffee-gif" />
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Home;
