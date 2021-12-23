import styles from "./About.module.scss";
import { forwardRef } from "react";
import Image from "next/image";

const aboutMe = [
    { key: 0, text: "MY_EXPERIENCE" },
    { key: 1, text: "TECH_IS_MY_PASSION" },
    { key: 2, text: "BUSINESS_ANALYSIS_EASE" },
];

const About = forwardRef(({ contact }: any, ref: any) => {
    return (
        <section className={styles.About} ref={ref}>
            <div>
                <p>
                    Hi! Nice to meet you! <br className={styles.break} />
                    My name is <span>Manuel Sabarrós</span>
                    <br />
                    and I&apos;m a software developer <br className={styles.break} />
                    living in Portugal.
                </p>
                <div className={styles.info}>
                    <div className={styles.aboutMe}>
                        <div>
                            <p>
                                I have experience in fullstack development, but my main expertise is the frontend world. I love developing beautiful websites and mobile apps and creating platforms
                                with great design.
                            </p>
                        </div>
                        <div>
                            <p>
                                Technology is my passion! I&apos;m always learning new things to add to my skill set, especially modern ones, so that I can help by adding value to projects and
                                delivering a high quality product.
                            </p>
                        </div>
                        <div>
                            <p>
                                And last but not least, I have ease for business analysis due to the degree I&apos;m currently studying, so I can collaborate with solutions for many areas of an
                                organization.
                            </p>
                        </div>
                    </div>
                    <div className={styles.profilePicture}>
                        <Image src="/assets/profile-picture.jpg" alt="profile-pic" layout="fill" priority />
                    </div>
                </div>
                <div className={styles.button}>
                    <button onClick={() => contact()}>Contact Me</button>
                </div>
            </div>
        </section>
    );
});

export default About;
