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
            <NavLink to="/passwordGenerator">Password Generator</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
