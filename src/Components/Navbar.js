import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/products/new">Create</Link>
    </nav>
  );
};

export default Navbar;
