const structure = {
  id: "1",
  name: "root",
  isFolder: true,
  items: [
    {
      id: "1.1",
      name: "folder1",
      isFolder: true,
      items: [
        {
          id: "1.1.1",
          name: "File1.txt",
          isFolder: false,
          items: [],
        },
        {
          id: "1.1.2",
          name: "folder1.1",
          isFolder: true,
          items: [
            {
              id: "1.1.2.1",
              name: "File1.txt",
              isFolder: false,
              items: [],
            },
          ],
        },
      ],
    },
    {
      id: "1.2",
      name: "folder2",
      isFolder: true,
      items: [
        {
          id: "1.2.1",
          name: "File1.txt",
          isFolder: false,
          items: [],
        },
        {
          id: "1.2.2",
          name: "File2.txt",
          isFolder: false,
          items: [],
        },
        {
          id: "1.2.3",
          name: "File3.txt",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: "1.3",
      name: "File1.txt",
      isFolder: false,
      items: [],
    },
  ],
};

export { structure };
