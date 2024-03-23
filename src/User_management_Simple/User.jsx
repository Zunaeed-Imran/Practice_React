import React from 'react'




const User = ({user, handleDelete}) => {

  const { id, username } = user;

  return (
    <>
      <article>
        <h2>{username}</h2>
        <h4>{id}</h4>
        <button onClick={() => {handleDelete(user.id)}}>Delete</button>
      </article>
    </>
  )
}

export default User;
