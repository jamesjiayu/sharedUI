import React, { useEffect, useState } from "react";
interface TabType {
  id: number;
  title: string;
  content: string;
}
const mockData: TabType[] = [
  { id: 1, title: "Item 1", content: "content 1" },
  { id: 2, title: "Item 2", content: "content 2" },
  { id: 3, title: "Item 3", content: "content 3" }
];
export default function Tabs() {
  const [data, setData] = useState<TabType[]>([] as TabType[]);
  const [isCurrent, setIsCurrent] = useState(1);
  useEffect(() => {
    setData(mockData);
  }, []);
  return (
    <>
      {data.map((tab) => (
        <div
          key={tab.id}
          onClick={() => {
            if (isCurrent !== tab.id) {
              setIsCurrent(tab.id);
            } else setIsCurrent(0);
          }}
        >
          <div>{tab.title}</div>
          <div style={{ display: isCurrent === tab.id ? "block" : "none" }}>
            {tab.content}
          </div>
        </div>
      ))}
    </>
  );
}
