import { Link } from "react-router-dom";
import { InstituteKeys } from "../../types/institute";
import "./styles.scss";
import { Linkeable } from "../../types/favorite";

type CategoryProps = Linkeable & {
  img: string;
  title: string;
  color: InstituteKeys;
};

export default function Category(props: CategoryProps) {
  const { img, title, color, link } = props;

  return (
    <div className={`category ${color}`}>
      <Link to={link} className="category__header">
        <img src={img} alt={`${title}_icon`} className="category__icon" />
      </Link>

      <Link to={link} className="category__title">
        <h3>{title}</h3>
      </Link>
    </div>
  );
}
