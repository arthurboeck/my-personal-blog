import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import { getPostsData } from "../data/posts";
import utilStyles from "../styles/utils.module.css";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Últimas do blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ title, subTitle }) => (
            <li className={utilStyles.listItem}>
              <Link href={``}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <p>{subTitle}</p>
              </small>
            </li>
          ))}
          <Link href={``} className={utilStyles.bolded}>
            Ver tudo
          </Link>
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
