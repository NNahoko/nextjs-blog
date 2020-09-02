import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { AiFillGithub } from "react-icons/ai";
import { IconContext } from "react-icons";
import { AiFillStar } from "react-icons/ai";

//import { getSortedPostsData } from "../lib/posts";

/*
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
*/

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello,I'm Nahoko.</p>
      </section>
      <section>
        experience:
        <br />
        [Linux, MySQL, ShellScript, PowerShell, AWS etc.]
        <br />
        self study:
        <br />
        [Ruby, Ruby on Rails, Graphql, Apollo, React, Javascript etc.]
      </section>
      <br />
      <AiFillStar />
      <br />
      <Link href="http://nahokov.com">
        <a>My Portfolio</a>
      </Link>
      <br />
      <AiFillStar />
      <section>
        <p>
          Use in My Portfolio
          <br />
          [Ruby on Rails, Graphql, Apollo Client, React]
        </p>
      </section>
      <IconContext.Provider value={{ color: "black", size: "2em" }}>
        <Link href="https://github.com/NNahoko?tab=repositories">
          <a>
            <AiFillGithub />
          </a>
        </Link>
      </IconContext.Provider>
    </Layout>
  );
}

/*
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>s
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
*/
