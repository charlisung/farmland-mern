import useFetch from "../useFetch";
import { Link } from "react-router-dom";

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
            <ul key={product._id}>
              <Link to={`/products/${product._id}`}>
                {product.name} - {product.price}
              </Link>
            </ul>
          );
        })}
    </>
  );
};

export default List;
