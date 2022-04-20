import { Link } from "react-router-dom";

export default function Add() {
  return (
    <p className="add">
      <Link to="/">Home</Link>
      <Link to="/products/new">ADD+</Link>
    </p>
  );
}
