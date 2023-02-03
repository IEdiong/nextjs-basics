import Head from "next/head";
import Link from "next/link";
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
          Hello 👋, I&apos;m Ediongsenyene. I&apos;m Software Engineer (Frontend
          Heavy). You can contact me on{" "}
          <Link href="https://www.twitter.com/iediong">Twitter</Link>
        </p>
        <p>
          (This is a sample website - you&apos;ll be building a site like this
          on <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
