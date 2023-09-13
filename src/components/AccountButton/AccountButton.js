import { Link } from 'react-router-dom';

function AccountButton() {
  return (
    <Link to="/profile">
      <button type="button" className="accountButton">
        Аккаунт
      </button>
    </Link>
  );
}

export default AccountButton;
