// Libraries
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Components
import { Button } from "../../components";

// Images
import notFound from "../../assets/images/404.png";

// Styles
import Style from "./NotFoundView.module.css";

export const NotFoundView: React.FC = () => {
  // Contexts

  // Hooks
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Error 404 | Page not found";
  }, []);

  return (
    <div className={Style.notFound}>
      <img src={notFound} alt="404" />
      <h2>Page Not Found</h2>
      <p>
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable
      </p>
      <Button onClick={() => navigate("/")} className={Style.goHomeBtn}>
        Go To Home
      </Button>
    </div>
  );
};
