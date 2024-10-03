import { useNavigate } from "react-router-dom";

const useCustomNavigation = () => {
  const navigate = useNavigate();

  const navigateToPath = (path) => {
    navigate(path);
  };

  return { navigateToPath };
};

export default useCustomNavigation;