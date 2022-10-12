import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Logo from "./myIcon.png";

const Header = ({
  title,
  SocialMedia1 = "http://www.sholab.com/",
  email = "mailto:shotechs@gmail.com",
}) => {
  return (
    <header className="header">
      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4 className="text-white">{title}</h4>
              <p className="text-white">Email me and tell me what you think.</p>
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
              <h4 className="text-white">Contact</h4>
              <ul className="list-unstyled">
                <li>
                  <a
                    href={SocialMedia1}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    🎮 MORE GAMES
                  </a>
                </li>
                <li>
                  <a
                    href={SocialMedia1}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    📣 Follow on Twitter
                  </a>
                </li>
                <li>
                  <a
                    href={SocialMedia1}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    👍 Like on Facebook
                  </a>
                </li>
                <li>
                  <a href={email} className="text-white">
                    📧 Email me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img src={Logo} className="logoPic" alt="logoPic" />
            <strong>{title}</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: "Resume",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
