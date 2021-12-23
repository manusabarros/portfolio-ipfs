import styles from "./Work.module.scss";
import { forwardRef } from "react";
import Image from "next/image";

const Work = forwardRef((props: any, ref: any) => {
    return (
        <section className={styles.Work} ref={ref}>
            <div>
                <p className={styles.heading}>Work Experience</p>
                <div>
                    <div className={styles.ortex}>
                        <div className={styles.work}>
                            <p className={styles.year}>Mar 2021 -&gt; Date.now()</p>
                            <p className={styles.title}>
                                FRONTEND DEVELOPER -{" "}
                                <a href="https://ortex.com" target="_blank" rel="noopener noreferrer">
                                    ORTEX
                                    <img src="/assets/redirect-orange.png" alt="redirect" />
                                    <img src="/assets/redirect-darkgrey.png" alt="redirect" />
                                </a>
                            </p>
                            <p className={styles.description}>
                                After learning a lot from my last experiences, I felt it was time to take a leap into an international experience. So I arrived at this fantastic fintech where I am
                                dedicated to developing the interfaces that improve the user experience with the platform. Technologies: React & Next.js.
                            </p>
                        </div>
                    </div>
                    <div className={styles.teacher}>
                        <div className={styles.work}>
                            <p className={styles.year}>Sep 2020 -&gt; Nov 2020 & May 2021 -&gt; Jul 2021</p>
                            <p className={styles.title}>PROGRAMMING TEACHER</p>
                            <p className={styles.description}>
                                On 2 occasions, I taught the basics of web development in a programme implemented by Bombieri and the regional faculty to promote the local industry and give the
                                opportunity to people who wanted to take their first steps in the IT world. More info{" "}
                                <a href="https://cdeluruguay.gob.ar/concepcion-de-programadores/" target="_blank" rel="noopener noreferrer">
                                    here
                                </a>
                                .
                            </p>
                            <ul className={styles.description}>
                                <li>
                                    <p>Course Duration: 90hs (10 weeks).</p>
                                </li>
                                <li>
                                    <p>Curriculum: HTML, CSS, BootStrap, JavaScript, jQuery, GIT & GitHub.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.talk}>
                        <p className={styles.heading}>Participations</p>
                        <div className={styles.participation}>
                            <p className={styles.year}>Oct 2020</p>
                            <p className={styles.title}>DIGITAL TRANSFORMATION TALK</p>
                            <p className={styles.description}>
                                In October 2020, I gave a live virtual talk for university students about the process of digital transformation in companies, and how digital transformation helps
                                growth even in times of crisis. Click{" "}
                                <a href="https://www.youtube.com/watch?v=7fnpmdUoJb0" target="_blank" rel="noopener noreferrer">
                                    here
                                </a>{" "}
                                to take a look at it!
                                <span> - in spanish :(</span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.bombieri}>
                        <div className={styles.work}>
                            <p className={styles.year}>Sep 2019 -&gt; Feb 2021</p>
                            <p className={styles.title}>
                                FRONTEND DEVELOPER -{" "}
                                <a href="https://bombieri.com.ar" target="_blank" rel="noopener noreferrer">
                                    BOMBIERI
                                    <img src="/assets/redirect-orange.png" alt="redirect" />
                                    <img src="/assets/redirect-darkgrey.png" alt="redirect" />
                                </a>
                            </p>
                            <p className={styles.description}>
                                I started as a frontend developer, but after a few month I moved to an agile team for a client in the insurance industry, and in there, my first works were related to
                                the backend. Then I focused on the client side of the applications we developed.
                            </p>
                            <p className={styles.description}>What I did:</p>
                            <ul className={styles.description}>
                                <li>
                                    <p>Responsive web and mobile development (Angular & Ionic).</p>
                                </li>
                                <li>
                                    <p>APIs and web services consumption and development (Java & Spring).</p>
                                </li>
                                <li>
                                    <p>Agile Methodologies (SCRUM).</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.college}>
                        <p className={styles.heading}>Education</p>
                        <div className={styles.education}>
                            <p className={styles.year}>Mar 2015 -&gt; Date.now()</p>
                            <p className={styles.title}>BACHELOR&apos;S IN INDUSTRIAL MANAGEMENT</p>
                            <p className={styles.description}>
                                Since 2015, I&apos;m studying the bachelor&apos;s degree in industrial management in the National Technological University (UTN). I finished 4° year.
                            </p>
                            <p className={styles.description}>
                                This career helped me a lot to understand business, its processes, interactions, and above all, the relationship with technology and the help that software development
                                provides to companies.
                            </p>
                            <p className={styles.description}>My favourite fields? Marketing and Operational Research.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Work;
