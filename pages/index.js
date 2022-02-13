import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import First from "./components/First";
import Intro from "./components/Intro";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blogr - Landing Page</title>
      </Head>
      <main>
        <Intro />
        <First />
      </main>
      <footer></footer>
    </div>
  );
}
