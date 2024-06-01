import { Link } from "react-router-dom";

const HeaderBottom = () => {
  return (
    <div className="header-bottom">
      <nav className="header-nav">
        <ol className="header-nav-list">
          <li className="header-nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="header-nav-item">
            <Link to="/leadership">Leadership</Link>
          </li>
          <li className="header-nav-item">
            <Link to="/tracks">Tracks</Link>
          </li>
          <li className="header-nav-item">
            <Link to="/events">Events</Link>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default HeaderBottom;
