import React from 'react';

const users = [
  {
    firstName: 'MD_Zunaeed',
    lastName: 'Imran',
  },
  {
    age: 26,
    phone: [{ home: '01599887745' }, { office: '884521' }],
  },
];

const Mapping = () => {
  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <h2>{user.firstName}</h2>
          <h2>{user.lastName}</h2>
          <h2>{user.age}</h2>
          {user.phone && user.phone.map((mobile, index) => (
              <div key={index}>
                <h2>{mobile.home}</h2>
                <h2>{mobile.office}</h2>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default Mapping;
