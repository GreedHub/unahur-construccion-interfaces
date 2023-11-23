import { useNavigate } from "react-router-dom";

import { ArrowBack } from "@mui/icons-material";

import "./styles.scss";

export default function Back() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={goBack} className="back-btn">
      <ArrowBack />
    </button>
  );
}
