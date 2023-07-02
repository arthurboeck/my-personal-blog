import Image from 'next/image';
import Link from 'next/link';
import styles from './profile-header.module.css';

const name = 'Arthur Guterres Boeck';
const imagePath = '/images/profile.jpg';

export default function ProfileHeader(home) {
  return (
    <header className={styles.header}>
      {home ?
        <>
          <Image
            priority
            src={imagePath}
            className={styles.borderCircle}
            height={144}
            width={144}
            alt={name}
          />
          <h1 className={styles.heading2Xl}>{name}</h1>
        </> :
        <>
          <Link href="/">
            <Image
              priority
              src={imagePath}
              className={styles.borderCircle}
              height={108}
              width={108}
              alt={name}
            />
          </Link>
          <h2 className={styles.headingLg}>
            <Link href="/" className={styles.colorInherit}>
              {name}
            </Link>
          </h2>
        </>
      }
    </header>
  );
}
