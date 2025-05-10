import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ onUserAdded }) => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      const response = await axios.post('http://localhost:8080/users', { name });
      onUserAdded(response.data); // 성공 시 콜백 호출
      setName('');
    } catch (error) {
      console.error('사용자 추가 실패:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>회원가입 (사용자 추가)</h3>
      <input
        type="text"
        placeholder="이름 입력"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">등록</button>
    </form>
  );
};

export default UserForm;

