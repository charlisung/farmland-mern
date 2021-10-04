import { useState, useEffect } from "react";
import Axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useHistory } from "react-router";

const Edit = () => {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("fruit");
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    Axios.get(
      `https://limitless-wave-08970.herokuapp.com/products/${id}/edit`
    ).then((res) => {
      setProduct(res.data.name);
      setPrice(res.data.price);
      setCategory(res.data.category);
    });
  }, []);

  const updateProduct = (e) => {
    e.preventDefault();

    Axios.put(
      `https://limitless-wave-08970.herokuapp.com/products/${id}/edit`,
      {
        name: product,
        price: price,
        category: category,
      }
    )
      .then(() => {
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Edit</h1>
      <form onSubmit={updateProduct}>
        <lable htmlFor="name">Product name:</lable>
        <input
          type="text"
          name="name"
          id="name"
          value={product}
          placeholder="product name"
          onChange={(e) => setProduct(e.target.value)}
        />
        <lable htmlFor="price">Unit price:</lable>
        <input
          type="number"
          name="price"
          id="name"
          value={price}
          placeholder="product price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="dairy">Dairy</option>
        </select>
        <button>submit</button>
      </form>
    </div>
  );
};

export default Edit;
