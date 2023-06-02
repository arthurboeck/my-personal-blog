import Head from "next/head";
import LastPostsSection from "../components/last-posts/last-posts";
import Layout, { siteTitle } from "../components/layout";
import { getPostsData } from "../data/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div style="whiteBackGround:">
        <LastPostsSection dataList={allPostsData} />
      </div>
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
