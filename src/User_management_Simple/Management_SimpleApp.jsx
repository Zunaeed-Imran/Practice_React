import React, { useState } from 'react'
import Users from './Users';
import New_users from './New_users';




const Management_SimpleApp = () => {

  const [users, setUsers] = useState([
    { id: 520, username: "Zunaeed Imran" },
    { id: 516, username: "Md. Rafid Islam"}
  ]);

  const handleDelete = (id) => {
    const filterUser = users.filter(user => user.id !== id)
    setUsers(filterUser);
  }

  const handelAddUser = (newuser) => {
    setUsers(prev => [...prev, newuser])
  }

  return (
    <>
      <New_users handelAddUser={handelAddUser} />
      <Users users={users} handleDelete={handleDelete} />
    </>
  );
}

export default Management_SimpleApp;
