import Head from "next/head";
import Image from "next/image";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
<link
  href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>;

const name = "Amélie Avery";
export const siteTitle = "Amélie Avery Portfolio";

export default function Layout({ children, home }) {
  return (
    <div className={styles.spacer}>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Amélie Avery Portfolio Website, build with Next.js and hosted on GitHub Pages."
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image
                priority
                src="https://amelieav.github.io/images/profile.jpg"
                className={`${utilStyles.borderCircle} ${styles.imageSpacing}`}
                height={144}
                width={144}
                alt="A photo of Amélie"
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </div>
          </>
        ) : (
          <>
            <div style={{ display: "flex", alignItems: "center" }}>
            <Link href="/">
              <Image
                priority
                src="https://amelieav.github.io/images/profile.jpg"
                className={`${utilStyles.borderCircle} ${styles.imageSpacing}`}
                height={86}
                width={86}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingMd}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
            </div>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}
