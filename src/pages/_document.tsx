import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="author" content="Manuel Sabarrós" />

                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:image" content="https://manusabarros.com/assets/profile-picture-192x192.png" />
                    <meta name="twitter:creator" content="@manusabarros" />

                    <meta property="og:type" content="website" />
                    <meta property="og:site_name" content="Manu Sabarrós" />
                    <meta property="og:image" content="https://manusabarros.com/assets/profile-picture-192x192.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
