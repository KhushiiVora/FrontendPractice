import { useState } from "react";
import Explorer from "./Explorer";
import useTraverseTree from "./hooks/useTraverseTree";

import { structure } from "./data/folderStructure";

export default function Index() {
  const [folderStructure, setFolderStructure] = useState(structure);
  const [selectedFolderId, setSelectedFolderId] = useState("1");
  const [showInput, setShowInput] = useState({
    display: false,
    id: selectedFolderId,
    isFolder: false,
  });

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const newStructure = insertNode(folderStructure, folderId, item, isFolder);
    // setFolderStructure(newStructure);
  };

  return (
    <div>
      <h1>Folder Structure Implementation</h1>
      <Explorer
        structure={folderStructure}
        handleInsertNode={handleInsertNode}
        selectedFolderId={selectedFolderId}
        setSelectedFolderId={setSelectedFolderId}
        showInput={showInput}
        setShowInput={setShowInput}
      />
    </div>
  );
}
