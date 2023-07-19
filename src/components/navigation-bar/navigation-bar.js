import styles from './navigation-bar.module.css';

export default function NavigationBar() {
  return (
    <div className={styles.topBar} data-testid="navigation-bar">
      <a href={``}>Blog</a>
      <a href={``}>Sobre</a>
      <a href={``}>Descrição</a>
    </div>
  );
}
