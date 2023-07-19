import Image from 'next/image';
import styles from './profile-header.module.css';

const name = 'Arthur Guterres Boeck';
const imagePath = '/images/profile.jpg';

export default function ProfileHeader() {
  return (
    <header className={styles.header} data-testid="profile-header">
      {
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
        </>
      }
    </header>
  );
}
