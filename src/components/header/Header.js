import logoPath from '../../images/logo.svg'
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Погода</h1>
      <img className={styles.logo} src={logoPath} alt='Логотип' />
    </header>
  )
}

export default Header;