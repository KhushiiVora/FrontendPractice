const useTraverseTree = () => {
  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.push({
        id: `${tree.id}.${tree.items.length + 1}`,
        name: item,
        isFolder,
        items: [],
      });
    }

    tree.items.map((treeItem) => {
      return insertNode(treeItem, folderId, item, isFolder);
    });
    return tree;
  }

  return { insertNode };
};

export default useTraverseTree;
