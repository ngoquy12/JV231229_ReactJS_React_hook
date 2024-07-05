import React, { useEffect, useRef, useState } from "react";
import ParentComponent from "./components/ParentComponent";
import Cart from "./components/Cart";
import Count from "./components/Count";
import { Button, Spin } from "antd";

export default function App() {
  const tabs = [
    {
      id: 1,
      name: "Post",
      url: "posts",
    },
    {
      id: 2,
      name: "Comment",
      url: "comments",
    },
    {
      id: 3,
      name: "Album",
      url: "albums",
    },
  ];

  const timeRef = useRef();
  const inputRef = useRef();
  const [time, setTime] = useState(0);
  const [posts, setPosts] = useState([]);
  const [currentTab, setCurrentTab] = useState("posts");
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleStart = () => {
    timeRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timeRef.current);
  };

  useEffect(() => {
    setShowLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/${currentTab}`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);

        setShowLoading(false);
      })
      .catch((error) => console.log(error))
      .finally(() => console.log("Xử lý xong"));
  }, [currentTab]);

  // useEffect(() => {});
  // useEffect(() => {}, [deps]);

  const handleChangeTab = (url) => {
    setCurrentTab(url);
  };

  return (
    <div>
      {/* <ParentComponent /> */}
      {/* <Cart /> */}

      {showLoading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 1)",
          }}
        >
          <Spin tip="Loading" size="large">
            Loading...
          </Spin>
        </div>
      )}

      <input value={10} ref={inputRef} type="text" />
      <h3>Time: {time}</h3>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>

      <div>
        {tabs.map((tab) => (
          <button
            className={`${tab.url == currentTab ? "active" : ""}`}
            onClick={() => handleChangeTab(tab.url)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <h3>Danh sách bài viết</h3>
      <ul>
        {posts.map((post) => (
          <li>
            <p>{post.title || post.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
