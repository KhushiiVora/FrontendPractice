import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <NavLink to="/file-explorer">File Explorer</NavLink>
      </nav>
    </>
  );
}
