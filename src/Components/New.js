import { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router";

const New = () => {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("fruit");
  const history = useHistory();
  const addProduct = (e) => {
    e.preventDefault();
    Axios.post("https://limitless-wave-08970.herokuapp.com/products/new", {
      product: product,
      price: price,
      category: category,
    })
      .then(() => {
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form onSubmit={addProduct}>
      <lable htmlFor="name">Product name:</lable>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="product name"
        onChange={(e) => setProduct(e.target.value)}
      />
      <lable htmlFor="price">Unit price:</lable>
      <input
        type="number"
        name="price"
        id="name"
        placeholder="product price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <label htmlFor="category">Category</label>
      <select
        name="category"
        id="category"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="fruit">Fruit</option>
        <option value="vegetable">Vegetable</option>
        <option value="dairy">Dairy</option>
      </select>
      <button>Save</button>
    </form>
  );
};

export default New;
