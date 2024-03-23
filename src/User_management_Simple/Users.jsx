import React from 'react'
import User from './User';




const Users = ({ users, handleDelete }) => {
  return (
    <>
      <section>
      {users.map(user => (
          <User
          key={user.id}
          user={user}
          handleDelete={handleDelete} />
          ))}
        </section>
    </>
  );
};

export default Users;
