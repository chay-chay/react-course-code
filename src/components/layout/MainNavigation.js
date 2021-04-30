import { Link } from 'react-router-dom';
import NavigationStyles from './MainNavigation.module.css'

function MainNavigation() {
  
  return (
    <header className={NavigationStyles.header}>
      <div className={NavigationStyles.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
          <Link to='/'>Some Link</Link>
          </li>
          <li>
          <Link to='/new-meetup'>Add New Meetup</Link>
          </li>
          <li>
          <Link to='/favorites'>MyFavorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;