import "./App.css";
import ClassComp from "./Components/ClassComp";
import Folders, { type FileNode } from "./Components/Folders";
// import ChatInterface from "./Components/ChatInterface";
import { Tabs } from "./Components/tabs";
import explorerData from "./data/folderData";

function App() {
  return (
    <>
      <Folders explorer={explorerData as FileNode} />
      <ClassComp />
      <Tabs />
    </>
  );
}

export default App;
