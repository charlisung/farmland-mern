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
        <div>
          <h2>{data.name}</h2>
          <p>{data.price}</p>
          <p>{data.category}</p>
          <Link to={`${data._id}/edit`}>Edit</Link>

          <button
            onClick={() => {
              handleClick(data._id);
            }}
          >
            Delete
          </button>
        </div>
      )}
      <Link to="/">Homepage</Link>
    </div>
  );
};

export default Detail;
