import Head from 'next/head';
import LastPostsSection from '../components/last-posts/last-posts';
import Layout from '../components/layout';
import { getPostsData } from '../data/posts';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{Layout.siteTitle}</title>
      </Head>
      <LastPostsSection dataList={allPostsData} />
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = await getPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}
