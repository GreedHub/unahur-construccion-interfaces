import "./styles.scss";
import Favoriteable from "../../types/favorite";
import { Star, StarBorder } from "@mui/icons-material";
import { useState } from "react";

type TopicFavoriteProps = Favoriteable;

export default function TopicFavorite(props: TopicFavoriteProps) {
  const { isFavorite } = props;
  const [isFavorited, setIsFavorited] = useState(isFavorite);

  const toggleFavorite = () => {
    setIsFavorited((fav) => !fav);
  };

  return (
    <button className="topic__favorite" onClick={toggleFavorite}>
      {isFavorited ? <Star /> : <StarBorder />}
    </button>
  );
}
