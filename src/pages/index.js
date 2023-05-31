import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <section>
        <p>ssSdf</p>
      </section>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Coloque aqui sua biografia de forma resumida. Coloque aqui sua
          biografia de forma resumida.Coloque aqui sua biografia de forma
          resumida.Coloque aqui sua biografia de forma resumida.Coloque aqui sua
          biografia de forma resumida.Coloque aqui sua biografia de forma
          resumida.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Últimas do blog</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <p>5 dicas para sua carreira profissional</p>
            <small className={utilStyles.lightText}>
              <p>
                Confira algumas dicas que podem ajudar a alavancar sua carreira
                como desenvolvedor front-end.
              </p>
            </small>
            <p>5 dicas para sua carreira profissional</p>
            <small className={utilStyles.lightText}>
              <p>
                Confira algumas dicas que podem ajudar a alavancar sua carreira
                como desenvolvedor front-end.
              </p>
            </small>
            <p>5 dicas para sua carreira profissional</p>
            <small className={utilStyles.lightText}>
              <p>
                Confira algumas dicas que podem ajudar a alavancar sua carreira
                como desenvolvedor front-end.
              </p>
            </small>
          </li>
          <p>Ver tudo</p>
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
