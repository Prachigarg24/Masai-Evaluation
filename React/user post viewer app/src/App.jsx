import { useEffect, useState } from "react";
import UserSelect from "./components/UserSelect";
import PostList from "./components/PostList";

function App() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState("");
  const [posts, setPosts] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [sortAsc, setSortAsc] = useState(true);

  
  useEffect(() => {
    setLoadingUsers(true);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .finally(() => setLoadingUsers(false));
  }, []);

  
  useEffect(() => {
    if (!userId) return;

    setLoadingPosts(true);

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .finally(() => setLoadingPosts(false));
  }, [userId]);


  const sortedPosts = [...posts].sort((a, b) =>
    sortAsc
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title)
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Posts Viewer</h2>

      {/* user dropdown */}
      <UserSelect
        users={users}
        loading={loadingUsers}
        setUserId={setUserId}
      />

      {/* sort button */}
      {userId && (
        <button onClick={() => setSortAsc(!sortAsc)}>
          Sort {sortAsc ? "Z-A" : "A-Z"}
        </button>
      )}

      {/* posts list */}
      <PostList
        posts={sortedPosts}
        loading={loadingPosts}
        userId={userId}
      />
    </div>
  );
}

export default App;