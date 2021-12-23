import styles from "./Skills.module.scss";
import { forwardRef } from "react";
import Image from "next/image";

const frontendSkills = ["HTML - CSS - SASS", "JavaScript - TypeScript", "React - Angular", "React Native - Ionic", "Next.js"];
const backendSkills = ["Node.js", "REST APIs (Express.js)", "GraphQL (Apollo)", "SQL (PostgreSQL)", "NoSQL (MongoDB)"];
const othersSkills = ["GIT", "GNU/Linux", "Docker", "AWS (EC2, S3, RDS, Route53)", "Agile Methodologies (SCRUM)"];

const Skills = forwardRef((props: any, ref: any) => {
    return (
        <section className={styles.Skills} ref={ref}>
            <div>
                <p>Technologies</p>
                <div>
                    <div>
                        <div className={styles.image}>
                            <img src="/assets/computer.svg" alt="computer" />
                        </div>
                        <p>FRONTEND</p>
                        <div className={styles.skills}>
                            {frontendSkills.map(skill => (
                                <p key={skill}>{skill}</p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className={styles.image}>
                            <img src="/assets/server.svg" alt="server" />
                        </div>
                        <p>BACKEND</p>
                        <div className={styles.skills}>
                            {backendSkills.map(skill => (
                                <p key={skill}>{skill}</p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className={styles.image}>
                            <img src="/assets/cloud.svg" alt="cloud" />
                        </div>
                        <p>OTHERS</p>
                        <div className={styles.skills}>
                            {othersSkills.map(skill => (
                                <p key={skill}>{skill}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Skills;
