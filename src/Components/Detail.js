import useFetch from "../useFetch";
import { useParams, Link } from "react-router-dom";
import Axios, * as others from "axios";
import { useHistory } from "react-router";

const Detail = () => {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    `https://limitless-wave-08970.herokuapp.com/products/${id}`
  );
  const history = useHistory();

  const handleClick = (id) => {
    Axios.delete(`https://limitless-wave-08970.herokuapp.com/delete/${id}`)
      .then(() => {
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && (
        <div className="detail">
          <p>Produce: {data.name}</p>
          <p>Price: {data.price}</p>
          <p>Category: {data.category}</p>{" "}
          <Link to={`${data._id}/edit`}>
            {" "}
            <button>Edit </button>
          </Link>
          <button
            onClick={() => {
              handleClick(data._id);
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Detail;
