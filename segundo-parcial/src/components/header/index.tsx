import { Star, Search, AccountCircle } from "@mui/icons-material";
import User from "../../types/user";
import "./styles.scss";
import { Link } from "react-router-dom";

type MobileNavProps = {
  user?: User;
};

export default function Header(props: MobileNavProps) {
  const { user } = props;

  return (
    <header className="desktop">
      <nav>
        <Link to="/" className="home-btn">
          <img src="/favicon.png" className="header-icon" /> Foro UNAHUR
        </Link>
        <span>
          <Link to="/search">
            <Search className="header-icon" />
          </Link>
          <Link to="/favorites">
            <Star className="header-icon" />
          </Link>
          <Link to="/profile">
            {user && (
              <img
                src={user.picture}
                alt="user_picture"
                className="user-icon"
              />
            )}
            {!user && <AccountCircle className="header-icon" />}
          </Link>
        </span>
      </nav>
    </header>
  );
}
