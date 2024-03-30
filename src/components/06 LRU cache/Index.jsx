import { useState } from "react";
import useLRUCache from "./hooks/useLRUCache";

export default function Index() {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const { get, put } = useLRUCache(3);

  async function loadContent(id) {
    setLoading(true);
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

    const data = {
      id,
      text: `Data from Tab ${id}`,
    };
    put(id, data);
    setContent((prev) => [...prev, data]);
    setLoading(false);
  }

  function handleClick(id) {
    const cachedData = get(id);
    if (cachedData) {
      console.log(`data with ${id} is loaded from the cache.`);
      setContent((prev) => [...prev, cachedData]);
    } else {
      console.log(`data with ${id} is stored into cache.`);
      loadContent(id);
    }
  }
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h1>LRU Cache simulation</h1>
        <button onClick={() => handleClick(1)}>Tab 1</button>
        <button onClick={() => handleClick(2)}>Tab 2</button>
        <button onClick={() => handleClick(3)}>Tab 3</button>
        <button onClick={() => handleClick(4)}>Tab 4</button>
        <button onClick={() => handleClick(5)}>Tab 5</button>
      </div>
      <div>
        <h3>Loaded content</h3>
        <ul>
          {content?.map((data, index) => {
            return <li key={`${data.id}${index}`}>{data.text}</li>;
          })}
          {loading ? <li>Loading data...</li> : <></>}
        </ul>
      </div>
    </div>
  );
}
