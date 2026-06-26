import * as React from "react";
import "./App.css";
import ClassComp from "./Components/ClassComp";
import Folders, { type FileNode } from "./Components/Folders";
import ShopingCart from "./Components/ShoppingCard";
// import ChatInterface from "./Components/ChatInterface";
import { Tabs } from "./Components/tabs";
import explorerData from "./data/folderData";
import { debounce } from "./utils";


const fetchProducts = (str: string) => {
  fetch("https://dummyjson.com/products" + `?searchString=${str}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.products, "data");
    })
    .catch((e) => console.log("error occu"));
};

function App() {
  const debouncedSearch = React.useRef(
    debounce((str: string) => fetchProducts(str), 200),
  );

    return (
    <>
      <label htmlFor="input">Search String</label>
      <input
        id="input"
        onChange={(e) => debouncedSearch.current(e.target.value)}
      />
      <ShopingCart />
      <Folders explorer={explorerData as FileNode} />
      <ClassComp />
      <Tabs />
    </>
  );
}

export default App;
