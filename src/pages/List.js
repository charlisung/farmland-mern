import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import Add from "./Add";

const categories = ["fruit", "vegetable", "dairy"];

const List = () => {
  const {
    data: products,
    isPending,
    error,
  } = useFetch("https://limitless-wave-08970.herokuapp.com/products");

  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {products && (
        <ul className="category-list">
          {categories.map((category) => {
            return (
              <li>
                <Link to={`/products/category/${category}`}>{category}</Link>
              </li>
            );
          })}
        </ul>
      )}
      {products && (
        <ul className="list">
          {products.map((product) => {
            return (
              <li key={product._id}>
                <Link to={`/products/${product._id}`}>
                  {product.name} - ${product.price}{" "}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default List;
