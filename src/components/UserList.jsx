import React, { useEffect } from 'react';
import axios from 'axios';

const UserList = ({ users }) => {
  return (
    <div>
      <h2>사용자 목록</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} (ID: {user.id})</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

