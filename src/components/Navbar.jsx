import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <ul style={{ listStyleType: "decimal" }}>
          <li>
            <NavLink to="/file-explorer">File Explorer</NavLink>
          </li>
          <li>
            <NavLink to="/pagination">Pagination</NavLink>
          </li>
          <li>
            <NavLink to="/password-generator">Password Generator</NavLink>
          </li>
          <li>
            <NavLink to="/progress-bar">Progress Bar</NavLink>
          </li>
          <li>
            <NavLink to="/grid-lights">Grid Lights</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
