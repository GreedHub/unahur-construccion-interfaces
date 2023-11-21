import { Star, Search, Home } from "@mui/icons-material";
import User from "../../types/user";
import "./styles.scss";

type MobileNavProps = {
  user: User;
};

export default function MobileNav(props: MobileNavProps) {
  const { user } = props;

  return (
    <nav className="mobile-nav">
      <a href="#">
        <Home />
      </a>
      <a href="#">
        <Search />
      </a>
      <a href="#">
        <Star />
      </a>
      <a href="#">
        <img src={user.picture} alt="user_picture" />
      </a>
    </nav>
  );
}