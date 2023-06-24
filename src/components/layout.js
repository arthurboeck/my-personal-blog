import styles from './layout.module.css';
import NavigationBar from './navigation-bar/navigation-bar';
import ProfileHeader from './profile-header/profile-header';
import ProfileInfo from './profile-info/profile-info';

export const siteTitle = 'My first blog page';

export default function Layout({children}) {
  return (
    <div>
      <div className={styles.colouredBackGround}>
        <NavigationBar />
        <div className={styles.container}>
          <ProfileHeader home />
          <ProfileInfo />
        </div>
      </div>
      <div className={styles.whiteBackGround}>
        <main>{children}</main>
      </div>
    </div>
  );
}
