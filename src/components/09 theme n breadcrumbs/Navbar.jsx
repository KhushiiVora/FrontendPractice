import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";
const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      <div className="nav_links">
        <Link to="/theme-N-breadcrumbs/">Home</Link>
        <Link to="/theme-N-breadcrumbs/about">About</Link>
        <Link to="/theme-N-breadcrumbs/products">Products</Link>
      </div>
      <div>
        <div className="mode_switch" onClick={toggleTheme}>
          <div className="mode_switch--slider">
            <div></div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
