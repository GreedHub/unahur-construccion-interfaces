import { Star, Search, Home, AccountCircle } from "@mui/icons-material";
import User from "../../types/user";
import "./styles.scss";
import { Link } from "react-router-dom";

type MobileNavProps = {
  user?: User;
};

export default function MobileNav(props: MobileNavProps) {
  const { user } = props;

  return (
    <header>
      <nav className="mobile-nav mobile">
        <Link to="/">
          <Home />
        </Link>
        <Link to="/search">
          <Search />
        </Link>
        <Link to="/favorites">
          <Star />
        </Link>
        <Link to="/profile">
          {user && <img src={user.picture} alt="user_picture" />}
          {!user && <AccountCircle />}
        </Link>
      </nav>
    </header>
  );
}
