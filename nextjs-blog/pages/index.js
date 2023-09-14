import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello! I'm a dedicated software engineer with a strong interest in the latest
          technologies. I'm especially focused on AI, machine learning, and
          robotics.{" "}
        </p>
        <p>
          (This portfolio website is still in development - Check out some of my {" "}
          <a href="/projects">personal projects</a>.)
        </p>
      </section>
    </Layout>
  );
}
