import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";
import CodeTag from "../components/CodeTag";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/layout.module.css";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <div className={styles.projectsContainer}>
          <Head>
            <title>Projects</title>
          </Head>
          <section className={utilStyles.headingMd}>
            <p style={{ textAlign: "center" }}>
              Here is an overview of some of my favourite personal projects.
            </p>

            <p
              style={{
                fontSize: "20px",
                paddingBottom: "20px",
                textAlign: "justify",
                paddingLeft: "0.5rem",
              }}
            >
              I have experience with a wide range of languages, including
              Python, JavaScript, C#, C++, Java, and Go. I also have experience
              with a variety of frameworks and libraries, including React,
              Angular, Next.js, Electron, Discord.js, and a wide range of API
              libraries!
              <br></br>
            </p>
          </section>
          <div className={utilStyles.projectCard}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h3 style={{ marginRight: "16px" }}>
                <a
                  href="https://github.com/amelieav/getimg.ai-requester"
                  className={utilStyles.link}
                >
                  getimg.ai-requester
                </a>
              </h3>
              <h3 className={utilStyles.textStatusComplete}>Complete</h3>
            </div>

            <p style={{ marginTop: "-10px" }}>
              This project provides a Python script to interact with the
              GetImg.ai API for generating and upscaling images.
            </p>

            <CodeTag bgColor="#3874a6" textColor="#fff" text="Python" />
          </div>

          <div className={utilStyles.projectCard}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h3 style={{ marginRight: "16px" }}>
                <a
                  href="https://github.com/amelieav/go-tools"
                  className={utilStyles.link}
                >
                  Go Tools
                </a>
              </h3>
              <h3 className={utilStyles.textStatusProgress}>In Progress</h3>
            </div>
            <p style={{ marginTop: "-10px" }}>
              Basic file analysis tools written in Go
            </p>
            <CodeTag bgColor="#00add8" textColor="#fff" text="Go" />
          </div>

          <div className={utilStyles.projectCard}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h3 style={{ marginRight: "16px" }}>
                <a
                  href="https://github.com/amelieav/sentiment-analysis"
                  className={utilStyles.link}
                >
                  Sentiment Analysis Bot
                </a>
              </h3>
              <h3 className={utilStyles.textStatusComplete}>Complete</h3>
            </div>
            <p style={{ marginTop: "-10px" }}>
              A sentiment analysis discord bot that can analyse the sentiment of
              messages sent in a server.
            </p>
            <CodeTag bgColor="#f1e05a" textColor="#000" text="JavaScript" />
          </div>
          {/* Electron App Unit Converter Project */}
          <div className={utilStyles.projectCard}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h3 style={{ marginRight: "16px" }}>
                <a
                  href="https://github.com/amelieav/unit-conv"
                  className={utilStyles.link}
                >
                  Electron App Unit Converter
                </a>
              </h3>
              <h3 className={utilStyles.textStatusProgress}>In Progress</h3>
            </div>
            <p style={{ marginTop: "-10px" }}>
              A unit converter app built with Electron, written in C#.
            </p>
            <CodeTag bgColor="#178600" textColor="#fff" text="C#" />
            <CodeTag bgColor="#e34c26" textColor="#fff" text="HTML" />
            <CodeTag bgColor="#f1e05a" textColor="#000" text="JavaScript" />
          </div>
          <div className={utilStyles.projectCard}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h3 style={{ marginRight: "16px" }}>
                <a
                  href="https://github.com/amelieav/Jeff-the-Meal-Help-Chef"
                  className={utilStyles.link}
                >
                  Meal Recommender
                </a>
              </h3>
              <h3 className={utilStyles.textStatusComplete}>Complete</h3>
            </div>
            <p style={{ marginTop: "-10px" }}>
              A discord bot first developed in at a UoB Hackathon Competition
              that recommends meals based on ingredients. (Yes, it won first
              place!)
            </p>
            <CodeTag bgColor="#3874a6" textColor="#fff" text="Python" />
          </div>
          <p style={{ padding: "10px", fontSize: "18px" }}>
            As of my last portfolio update, my GitHub account features 23
            repositories, (including some that are private.){" "}
          </p>
          <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
