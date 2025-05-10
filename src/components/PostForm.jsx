import React, { useState } from 'react';
import axios from 'axios';

const PostForm = ({ onPostCreated }) => {
  const [form, setForm] = useState({ title: '', content: '', author: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/posts', form);
      onPostCreated(res.data);
      setForm({ title: '', content: '', author: '' });
    } catch (err) {
      console.error('게시글 작성 실패:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>✍️ 게시글 작성</h2>
      <input name="title" placeholder="제목" value={form.title} onChange={handleChange} required /><br />
      <textarea name="content" placeholder="내용" value={form.content} onChange={handleChange} required /><br />
      <input name="author" placeholder="작성자" value={form.author} onChange={handleChange} required /><br />
      <button type="submit">작성</button>
    </form>
  );
};

export default PostForm;

