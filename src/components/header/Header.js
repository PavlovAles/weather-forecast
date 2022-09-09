import { Link } from 'react-router-dom';
import logoPath from '../../images/logo.svg'
import MySearchBar from '../mySearchBar/MySearchBar';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.link} to='/'>
        <div className={styles.logoContainer}>
          <h1 className={styles.title}>Погода</h1>
          <img className={styles.logo} src={logoPath} alt='Логотип' />
        </div>
      </Link>
      <MySearchBar />
    </header>
  )
}

export default Header;