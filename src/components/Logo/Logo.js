import { Link } from 'react-router-dom';
import logo from '../../images/header-logo.svg';

function Logo() {
  return (
    <Link to="/" className="logo">
      <img
        src={logo}
        alt="Логотип в виде зеленого квадрата с закругленными углами внутри которого находиться белый улыбающийся смайлик без глаз"
      />
    </Link>
  );
}

export default Logo;
