import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './PostBoard.css';
import PostList from './PostList';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.error('게시글 불러오기 실패:', err));
  }, [id]);

  if (!post) return <div>게시글을 불러오는 중입니다...</div>;

  return (
    <div className="board-container">
      <h2>{post.title}</h2>
      <p><strong>작성자:</strong> {post.author}</p>
      <p>{post.content}</p>
      <br />
      <Link to="/">← 목록으로</Link>
      <hr />
      <h3> 전체 게시글 목록 </h3>
      <PostList /> 
    </div>
  );
};

export default PostDetail;

