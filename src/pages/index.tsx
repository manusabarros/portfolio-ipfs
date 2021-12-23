import styles from "./index.module.scss";
import { useEffect, useRef, useState } from "react";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Home from "../components/home/Home";
import Work from "../components/work/Work";
import Skills from "../components/skills/Skills";
import Head from "next/head";

export enum Colors {
    WHITE = "#fffcf2",
    BLACK = "#252422",
    DARKGREY = "#55504a",
    LIGHTGREY = "#b9b2a4",
    ORANGE = "#eb5e28",
}

const scrollBehavior: ScrollIntoViewOptions = { behavior: "smooth" };

const Index = () => {
    const [headerColor, setHeaderColor] = useState(Colors.WHITE);

    const homeRef = useRef<HTMLElement>();
    const aboutRef = useRef<HTMLElement>();
    const workRef = useRef<HTMLElement>();
    const skillsRef = useRef<HTMLElement>();
    const footerRef = useRef<HTMLElement>();

    const goTo = (link: string) => {
        switch (link) {
            case "Home":
                if (homeRef.current) homeRef.current.scrollIntoView(scrollBehavior);
                break;
            case "About":
                if (aboutRef.current) aboutRef.current.scrollIntoView(scrollBehavior);
                break;
            case "Work":
                if (workRef.current) workRef.current.scrollIntoView(scrollBehavior);
                break;
            case "Skills":
                if (skillsRef.current) skillsRef.current.scrollIntoView(scrollBehavior);
                break;
            case "Contact":
                if (footerRef.current) footerRef.current.scrollIntoView(scrollBehavior);
                break;
        }
    };

    const contact = () => {
        if (footerRef.current) footerRef.current.scrollIntoView(scrollBehavior);
    };

    const getCurrentScroll = () => window.pageYOffset || document.documentElement.scrollTop;

    const verifyHeaderColor = () => {
        if (aboutRef.current && workRef.current && skillsRef.current && footerRef.current) {
            const pxTolerance = 1;
            const scroll = getCurrentScroll();
            if (scroll < aboutRef.current.offsetTop - pxTolerance) setHeaderColor(Colors.WHITE);
            else if (scroll < workRef.current.offsetTop - pxTolerance) setHeaderColor(Colors.ORANGE);
            else if (scroll < skillsRef.current.offsetTop - pxTolerance) setHeaderColor(Colors.WHITE);
            else if (scroll < footerRef.current.offsetTop - pxTolerance) setHeaderColor(Colors.ORANGE);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", verifyHeaderColor);
        window.addEventListener("resize", verifyHeaderColor);
    }, []);

    return (
        <>
            <Head>
                <title>Manu Sabarrós</title>
                <meta name="author" content="Manuel Sabarrós" />
                <link rel="canonical" href="https://manusabarros.com/" />

                <meta name="description" content="Manuel Sabarrós' Portfolio. Software Developer based in Portugal" />
                <meta
                    name="keywords"
                    content="Manuel Sabarrós, Manu Sabarrós, software, developer, frontend, front end, front-end, backend, back end, back-end, fullstack, full stack, full-stack, web developer, mobile developer, react developer, react, next js, next.js, react native, node js"
                />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Manu Sabarrós" />
                <meta name="twitter:creator" content="@manusabarros" />
                <meta name="twitter:description" content="Manuel Sabarrós' Portfolio. Software Developer based in Portugal" />
                <meta name="twitter:image" content="https://manusabarros.com/assets/profile-picture-192x192.png" />
                <meta name="twitter:url" content="https://manusabarros.com/" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Manu Sabarrós" />
                <meta property="og:site_name" content="Manu Sabarrós" />
                <meta property="og:description" content="Manuel Sabarrós' Portfolio. Software Developer based in Portugal" />
                <meta property="og:image" content="https://manusabarros.com/assets/profile-picture-192x192.png" />
                <meta property="og:url" content="https://manusabarros.com/" />
            </Head>
            <div className={styles.Index}>
                <Header onGoTo={goTo} color={headerColor} />
                <main>
                    <Home ref={homeRef} />
                    <About ref={aboutRef} contact={contact} />
                    <Work ref={workRef} />
                    <Skills ref={skillsRef} />
                </main>
                <Footer ref={footerRef} />
            </div>
        </>
    );
};

export default Index;
