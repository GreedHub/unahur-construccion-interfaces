import { InstituteKeys } from "../../types/institute";
import "./styles.scss";

type CategoryProps = {
  img: string;
  title: string;
  color: InstituteKeys;
};

export default function Category(props: CategoryProps) {
  const { img, title, color } = props;

  return (
    <div className={`category ${color}`}>
      <div className="category__header">
        <img src={img} alt={`${title}_icon`} className="category__icon" />
      </div>

      <h3 className="category__title">{title}</h3>
    </div>
  );
}
