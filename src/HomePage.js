import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPostsRequests } from "./apiPosts";

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  const getPost = async () => {
    const res = await getPostsRequests();

    setPosts(res.data);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      <Link to="/new">Ir a new</Link>
      {posts.map((item) => (
        <h1 key={item._id}>{item.title}</h1>
      ))}
    </div>
  );
}
