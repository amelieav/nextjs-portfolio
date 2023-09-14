import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>Projects</title>
        </Head>
        <h1>Projects</h1>

        <h3>
          <a href="https://github.com/amelieav/getimg.ai-requester">
            getimg.ai-requester
          </a> Complete
          </h3>

          <p>
            This project provides a Python script to interact with the GetImg.ai
            API for generating and upscaling images.
          </p>

          <h3>
          <a href="https://github.com/amelieav/go-tools">Go Tools
          </a> In Progress
          </h3>

          <p>
          Basic file analysis tools written in Go
          </p>

          <h3>
          <a href="https://github.com/amelieav/sentiment-analysis">
            Sentiment Analysis Bot
          </a> Complete
          </h3>

          <p>
            A sentiment analysis discord bot that can analyse the sentiment of messages sent in a server.
          </p>

          <h3>
          <a href="https://github.com/amelieav/unit-conv">Electron App Unit Converter</a> In Progress
          </h3>

          <p>
            A unit converter app built with Electron, written in C#.
          </p>

          <h3>
          <a href="https://github.com/amelieav/Jeff-the-Meal-Help-Chef">Meal Recommender</a> Complete
          </h3>

          <p>
            A discord bot first developed in at a UoB Hackathon Competition that recommends meals based on ingredients. (Yes, it won first place!)
          </p>
          
          

      </Layout>
    </>
  );
}
