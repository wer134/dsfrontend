import React from 'react';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <a href="/">CHOI</a>
        </div>
        <div className="header-right">
          <input type="text" placeholder="검색어를 입력하세요" />
          <button>검색</button>
          <a href="#">회원가입</a>
          <a href="#">로그인</a>
        </div>
      </header>

      <nav>
        <ul>
          <li>
            <a href="#">쇼핑/투자</a>
            <div className="dropdown">
              <a href="#">쇼핑</a>
              <a href="#">투자</a>
            </div>
          </li>
          <li>
            <a href="#">스포츠</a>
            <div className="dropdown">
              <a href="#">축구</a>
              <a href="#">야구</a>
            </div>
          </li>
          <li>
            <a href="#">유머/이슈</a>
            <div className="dropdown">
              <a href="#">유머</a>
              <a href="#">이슈</a>
            </div>
          </li>
          <li>
            <a href="#">갤러리</a>
            <div className="dropdown">
              <a href="#">매드무비</a>
              <a href="#">스샷</a>
            </div>
          </li>
          <li>
            <a href="#">삭제/문의</a>
            <div className="dropdown">
              <a href="#">문의</a>
              <a href="#">FAQ</a>
            </div>
          </li>
        </ul>
      </nav>

      <div className="content">
        <div className="left-column">
          <h3>회원가입/로그인</h3>
          <input type="text" placeholder="아이디" />
          <input type="password" placeholder="비밀번호" />
          <button>로그인</button>
          <div className="links">
            <a href="#">회원가입</a>
            <a href="#">비밀번호 찾기</a>
          </div>
        </div>

        <div className="main">
          <div className="main-banner">
            <img src="https://via.placeholder.com/800x200" alt="메인 배너" />
          </div>

          <table>
            <thead>
              <tr>
                <th>최신 게시글</th>
                <th>작성일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>새로운 글 1</td>
                <td>2024-12-01</td>
              </tr>
              <tr>
                <td>새로운 글 2</td>
                <td>2024-12-01</td>
              </tr>
            </tbody>
          </table>

          <div className="ad-box">
            <img src="https://via.placeholder.com/300x600" alt="광고" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

