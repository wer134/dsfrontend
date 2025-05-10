import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './PostBoard.css';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/posts').then((res) => {
      setPosts(res.data.reverse());
    });
  }, []);

  return (
    <table className="post-table">
      <thead>
        <tr>
          <th>순번</th>
          <th>제목</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post, index) => (
          <tr key={post.id}>
            <td>{posts.length - index}</td>
            <td>
              <Link to={`/posts/${post.id}`} className="post-link">
                {post.title}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PostList;

