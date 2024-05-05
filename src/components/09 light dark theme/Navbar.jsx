import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";
const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      <div className="nav_links">
        <Link to="/theme/">Home</Link>
        <Link to="/theme/about">About</Link>
        <Link to="/theme/product">Product</Link>
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
