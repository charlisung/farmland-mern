import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Category() {
  const { id } = useParams();

  const { data, isPending, error } = useFetch(
    "https://limitless-wave-08970.herokuapp.com/products"
  );

  const products = data && data.filter((product) => product.category === id);

  return (
    <div>
      <p
        style={{
          textAlign: "center",
          marginBottom: "10px",
          textTransform: "uppercase",
          letterSpacing: "3px",
        }}
      >
        {id}
      </p>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data &&
        products.map((product) => (
          <ul key={product._id} className="list">
            <li>
              <Link to={`/products/${product._id}`}>
                {product.name}(${product.price}){" "}
              </Link>
            </li>
          </ul>
        ))}
    </div>
  );
}
