import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isAvailable, setIsAvailable] = useState(null);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  useEffect(() => {
    const check = setTimeout(() => {
      if (username) {
        axios.get(`http://localhost:8080/users/${username}`)
          .then(res => {
            console.log('중복 확인 응답:', res.data);
            setIsAvailable(res.data.available);
          })
          .catch(err => {
            console.error('중복 확인 실패:', err);
            setIsAvailable(false);
          });
      }
    }, 500);

    return () => clearTimeout(check);
  }, [username]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isAvailable) {
      setMessage("사용할 수 없는 아이디입니다.");
      return;
    }

    if (password !== passwordConfirm) {
      setMessage("비밀번호가 일치하지 않습니다.");
      return;
    }

    axios.post('http://localhost:8080/users/register', {
      username, password,name
    }).then(() => {
      alert("회원가입 성공!");
      window.location.href = "/";
    }).catch(() => {
      setMessage("회원가입 중 오류 발생");
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="아이디"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          {isAvailable === false && <span style={{ color: 'red' }}>이미 존재하는 아이디입니다.</span>}
          {isAvailable === true && <span style={{ color: 'green' }}>사용 가능한 아이디입니다.</span>}
        </div>
        <div>
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="비밀번호 확인"
            value={passwordConfirm}
            onChange={e => setPasswordConfirm(e.target.value)}
          />
        </div>
        <button type="submit">회원가입</button>
        <div style={{ color: 'red' }}>{message}</div>
	<div>
	  <input
	  type="text"
	  placeholer="이름"
	  value={name}
	  onChange={e=> setName(e.target.value)}
	  style={{ width:'90%', marginBottom:'10px' }}
	/>
	</div>
      </form>
    </div>
  );
};

export default RegisterForm;

