import styles from "./layout.module.css";
import NavigationBar from "./navigation-bar/navigation-bar";
import ProfileHeader from "./profile-header/profile-header";
import ProfileInfo from "./profile-info/profile-info";

export const siteTitle = "My first blog page";

export default function Layout({ children }) {
  return (
    <div>
      <NavigationBar />
      <div className={styles.container}>
        <ProfileHeader home />
        <ProfileInfo />
        <main>{children}</main>
      </div>
    </div>
  );
}
