import Link from 'next/link';
import styles from './last-posts.module.css';

export default function LastPostsSection({ dataList }) {
  return (
    <section className={`${styles.headingMd} ${styles.padding1px}`} data-testid="last-posts-section">
      <h2 className={styles.headingLg}>Últimas do blog</h2>
      <PostDataList postList={dataList} />
    </section>
  );
}

function PostDataList({ postList }) {
  return (
    <ul className={styles.list}>
      {postList.map(({ title, subTitle }, index) => <li key={index}>
        <Link href={``} className={styles.listItem}>{title}</Link>
        <br />
        <small className={styles.lightText}>
          <p>{subTitle}</p>
        </small>
      </li>)}
      <ListAll />
    </ul>
  );
}

function ListAll() {
  return (
    <Link href={``} className={styles.bolded} data-testid="list-all">
      Ver tudo
    </Link>
  );
}
