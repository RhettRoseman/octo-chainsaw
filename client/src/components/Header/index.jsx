import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">Photography Portfolio</h1>
          </Link>
          <p className="m-0">Snap a shot and share your thoughts!</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link id="log-but" className="btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button id="log-but" className="btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link id="log-but" className="btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link id="log-but" className="btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
