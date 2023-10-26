import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import VerticalElement from "../components/VerticalElement";
import styles from "../styles/layout.module.css";

export default function Home() {
  return (
    <Layout home>
      <div className={styles.container}>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "20vh",
            }}
          >
            {" "}
            <div  style={{ display: "flex", alignItems: "center", marginTop: "2rem", marginLeft: "2.8rem"}}>
              <a className={styles.ButtonLink} style={{ paddingRight: "1rem" }} href="/projects">
                Personal projects
              </a>
              <a className={styles.ButtonLink}
                style={{ paddingLeft: "1rem" }}
                href="https://www.linkedin.com/in/am%C3%A9lie-avery-7a34a1187/"
              >
                Contact me on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </div>
      <VerticalElement className={utilStyles.timelinecontainer} />{" "}
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className={utilStyles.stillInDevelopment}>
          (This portfolio website is still in development)
        </div>
      </div>
    </Layout>
  );
}
