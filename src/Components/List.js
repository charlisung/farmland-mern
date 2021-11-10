import useFetch from "../useFetch";
import { Link } from "react-router-dom";
import Add from "./Add";

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

      {products &&
        products.map((product) => {
          return (
            <ul key={product._id} className="list">
              <li>
                <Link to={`/products/${product._id}`}>
                  {product.name}(${product.price}){" "}
                </Link>
                -{" "}
                <Link to={`/products/category/${product.category}`}>
                  <small>{product.category}</small>
                </Link>
              </li>
            </ul>
          );
        })}
    </>
  );
};

export default List;
