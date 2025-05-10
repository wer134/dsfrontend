import React, { useState } from 'react';
import PostList from './PostList';
import PostForm from './PostForm';
import LoginForm from './LoginForm';

const PostBoard = () => {
  const [users, setUsers] = useState([]);
  const [reloadKey, setReloadKey] = useState(0);

  const handleUserAdded = (newUser) => {
    setUsers((prev) => [...prev, newUser]);
  };

  const handlePostCreated = () => {
    setReloadKey((prev) => prev + 1);
  };

  return (
    <div className="board-container">
      <h1>자유게시판</h1>
      <LoginForm />
      <PostForm onPostCreated={handlePostCreated} />
      <PostList key={reloadKey} />
    </div>
  );
};

export default PostBoard;

