import { Link } from 'react-router-dom';
import logo from '../../images/header-logo.png';

function HeaderLogo() {
  return (
    <Link to="/">
      <img
        src={logo}
        className="header__logo"
        alt="Логотип в виде зеленого квадрата с закругленными углами внутри которого находиться белый улыбающийся смайлик без глаз"
      />
    </Link>
  );
}

export default HeaderLogo;
