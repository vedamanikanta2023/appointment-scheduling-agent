import { useEffect, useState } from "react";
// import explorerData from "../data/folderData";

export interface FileNode {
  name: string;
  isFolder: boolean;
  ext?: string; // optional — only for files
  children: FileNode[]; // optional — only for folders
}

export default function Folders({ explorer }: { explorer: FileNode }) {
  const [isExpand, setExpand] = useState(false);

  useEffect(() => {
    return () => {
      setExpand(false);
    };
  }, []);

  if (explorer.isFolder) {
    return (
      <div style={{ textAlign: "left" }}>
        <span onClick={() => setExpand(!isExpand)}>
          {!isExpand ? "▶" : "▼"} {explorer.name} <br />
        </span>
        {isExpand && (
          <div
            style={{
              display: isExpand ? "block" : "none",
              paddingLeft: "15px",
            }}
          >
            {explorer.children.map((child) => (
              <Folders explorer={child} />
            ))}
          </div>
        )}
      </div>
    );
  }
  return (
    <span style={{ paddingLeft: "0px" }}>
      {explorer.name}
      <br />
    </span>
  );
}
