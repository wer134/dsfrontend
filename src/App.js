import React, { useState } from 'react';

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostBoard from './components/PostBoard';
import PostDetail from './components/PostDetail';
import RegisterForm from './components/RegisterForm';

function App() {
return (
  <Router>
      <Routes>
        <Route path="/" element={<PostBoard />} />
        <Route path="/posts/:id" element={<PostDetail />} />
	<Route path="/register" element={<RegisterForm />} />
      </Routes>

  </Router>
);

}

export default App;

