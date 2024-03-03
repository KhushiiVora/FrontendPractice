import { useState } from "react";

import { StyledDiv } from "./explorer.styles";

export default function Explorer({
  structure,
  handleInsertNode,
  selectedFolderId,
  setSelectedFolderId,
  showInput,
  setShowInput,
}) {
  const [expand, setExpand] = useState(false);
  const [explorer] = useState(structure);

  const handleClick = (event, isFolder) => {
    setShowInput({ display: true, isFolder, id: selectedFolderId });
  };

  const handleEnter = (event) => {
    if (event.key === "Enter" && event.target.value) {
      handleInsertNode(explorer.id, event.target.value, showInput.isFolder);
      setShowInput({ ...showInput, display: false });
    }
  };

  const handleExpand = (event, explorerId) => {
    console.log(explorerId);
    setSelectedFolderId(explorerId);
    setExpand(!expand);
  };
  return (
    <StyledDiv>
      {explorer.name === "root" ? (
        <>
          <div className="structure_container">
            <span onClick={(e) => handleExpand(e, explorer.id)}>
              📁 {explorer.name}{" "}
            </span>
            <div>
              <button onClick={(e) => handleClick(e, true)}>📁+</button>
              <button onClick={(e) => handleClick(e, false)}>📄+</button>
            </div>
          </div>
          {showInput.display && explorer.id === showInput.id ? (
            <div className="input">
              {showInput.isFolder ? "📁" : "📄"}{" "}
              <input
                type="text"
                autoFocus
                onBlur={() => setShowInput({ ...showInput, display: false })}
                onKeyDown={handleEnter}
              />
            </div>
          ) : (
            <></>
          )}
          {expand ? (
            explorer.items.map((item) => (
              <Explorer
                key={item.id}
                structure={item}
                handleInsertNode={handleInsertNode}
                selectedFolderId={selectedFolderId}
                setSelectedFolderId={setSelectedFolderId}
                showInput={showInput}
                setShowInput={setShowInput}
              />
            ))
          ) : (
            <></>
          )}
        </>
      ) : (
        <div className={"structure_container__folder"}>
          {explorer.isFolder ? (
            <>
              <span
                onClick={(e) => handleExpand(e, explorer.id)}
                className={`${
                  explorer.id === selectedFolderId && expand ? "selected" : ""
                }`}
              >
                📁 {explorer.name}{" "}
              </span>
              {showInput.display && explorer.id === showInput.id ? (
                <div className="input">
                  {showInput.isFolder ? "📁" : "📄"}{" "}
                  <input
                    type="text"
                    autoFocus
                    onBlur={() =>
                      setShowInput({ ...showInput, display: false })
                    }
                    onKeyDown={handleEnter}
                  />
                </div>
              ) : (
                <></>
              )}
              {expand ? (
                explorer.items.map((item) => (
                  <Explorer
                    key={item.id}
                    structure={item}
                    handleInsertNode={handleInsertNode}
                    selectedFolderId={selectedFolderId}
                    setSelectedFolderId={setSelectedFolderId}
                    showInput={showInput}
                    setShowInput={setShowInput}
                  />
                ))
              ) : (
                <></>
              )}
            </>
          ) : (
            <span className="structurr_container__file">
              📄 {explorer.name}{" "}
            </span>
          )}
        </div>
      )}
    </StyledDiv>
  );
}
