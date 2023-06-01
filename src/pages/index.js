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
      <section className={utilStyles.headingMd}>
        <p>
          Formado em Sistemas de Informação em 2019, tenho na área de qualidade de software desde 2013. Recentemente conclui a Especialização em Engenharia de Softeware, em 2022, pela UNISINOS/RS, e atuando como Engenheiro de Qualidade no Sicredi. Gosto de aprender novos conhecimentos e realizar experimentos com novas tecnologias.
        </p>
      </section>
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
          <Link href={``}>Ver tudo</Link>
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
