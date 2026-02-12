import React, { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        setPosts(response.data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <h2>Loading posts...</h2>;

  return (
    <div className="p-8">
      <h1 className="text-3xl italic mb-4">All Posts:</h1>
      <div className="flex flex-wrap gap-4">
        {posts.map((post,idx) => (
          <div key={idx} className="rounded-2xl p-4">
            <img
              className="rounded-2xl"
              src={post.url}
              alt="Post"
              style={{ width: "300px", height: "400px", objectFit: "cover" }}
            />
            <h2 className="font-semibold text-xl">{post.caption}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
