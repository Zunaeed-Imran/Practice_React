import React from 'react';

const users = [
  {
    firstName: 'First Name: MD_Zunaeed',
    lastName: 'Nick Name: Imran',
  },
  {
    age: 'Age: 26',
    phone: [{ home: 'Home: 01599887745' }, { office: 'Office: 884521' }],
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
