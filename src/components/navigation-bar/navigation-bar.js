import styles from './navigation.module.css';

export default function NavigationBar() {
  return (
    <div className={styles.topBar}>
      <a href={``}>Blog</a>
      <a href={``}>Sobre</a>
      <a href={``}>Descrição</a>
    </div>
  );
}
