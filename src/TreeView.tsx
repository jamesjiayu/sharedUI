import React, { useEffect, useState } from "react";
interface TreeItemType {
  type: "folder" | "file";
  id: number;
  name: string;
  children?: TreeItemType[];
}
const mockData: TreeItemType[] = [
  {
    type: "folder",
    id: 1,
    name: "Applications",
    children: [
      { id: 5, name: "Calendar", type: "file" },
      { id: 3, name: "Chrome", type: "file" },
      { id: 4, name: "Webstorm", type: "file" }
    ]
  },
  {
    type: "folder",
    id: 2,
    name: "Documents",
    children: [
      {
        id: 6,
        name: "MUI",
        type: "folder",
        children: [
          {
            id: 7,
            name: "src",
            type: "folder",
            children: [
              { id: 8, name: "index.js", type: "file" },
              { id: 9, name: "tree-view.js", type: "file" }
            ]
          }
        ]
      }
    ]
  }
];
const TreeItem = ({ id, name, type, children }: TreeItemType) => {
  return (
    <>
      <div key={id}>
        <span>{name}</span>
        {/* {children ??
          children.length ??
          children.map((item) => <TreeItem {...item} />)} */}
      </div>
    </>
  );
};
//props
export function TreeView() {
  const [data, setData] = useState<TreeItemType[]>([]);
  useEffect(() => {
    setData(mockData);
  }, []);
  return (
    <>
      {data.map((item) => (
        <TreeItem {...item} />
      ))}
    </>
  );
}
