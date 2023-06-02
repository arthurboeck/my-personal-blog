import Image from "next/image";
import Link from "next/link";
import NavigationBar from "../components/navigation-bar";
import utilStyles from "../styles/utils.module.css";
import styles from "./layout.module.css";

const name = "Arthur Guterres Boeck";
export const siteTitle = "My first blog page";

export default function Layout({ children, home }) {
  return (
    <div>
      <NavigationBar />
      <div className={styles.container}>
        <header className={styles.header}>
          {home ? (
            <>
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/" className={utilStyles.colorInherit}>
                  {name}
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}
