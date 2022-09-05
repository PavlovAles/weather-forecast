import { NavLink } from 'react-router-dom';
import logoPath from '../../images/logo.svg'
import SearchBar from '../searchBar/SearchBar';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <NavLink className={styles.link} to='/'>
        <div className={styles.logoContainer}>
          <h1 className={styles.title}>Погода</h1>
          <img className={styles.logo} src={logoPath} alt='Логотип' />
        </div>
      </NavLink>
      <SearchBar />
    </header>
  )
}

export default Header;