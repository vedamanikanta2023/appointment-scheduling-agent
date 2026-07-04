import { useEffect } from "react";

export default function ShopingCart() {
  const fetchProducts = () => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.products, "data");
      })
      .catch((e) => console.log("error occu"));
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return <h1>Shopping Card</h1>;
}
