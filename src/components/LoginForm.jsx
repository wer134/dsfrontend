import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'; // 선택: 스타일 분리 가능
import {Link} from 'react-router-dom';


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`아이디: ${username}, 비밀번호: ${password}`);
  };

  return (
    <div className="login-box" style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      marginBottom: '20px',
      width: '300px'
    }}>
      <h3>로그인</h3>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%', marginBottom: '10px' }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', marginBottom: '10px' }}
          />
        </div>
        <button type="submit" style={{ width: '100%' }}>로그인</button>
      </form>
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
	  <Link to="/register" style={{ fontSize: '0.9rem', color: '#007dff', textDecoration: 'none' }}>
	  회원가입
	  </Link>
      </div>
    </div>
  );
};

export default LoginForm;

