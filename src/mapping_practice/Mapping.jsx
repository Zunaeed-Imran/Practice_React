import React from 'react'


const user = [
  {
    firstName: "MD_Zunaeed",
    lastName: "Imran"
  },
  {
    age: 26,
    phone: [
      {
        home: '01599887745',
        office: '884521'
      }
    ]
  }
]



const Mapping = () => {
  return (
    <div>
      {user.map((user, index) => (
        <div key={index}>
          <h2>{user.firstName}</h2>
          <h2>{user.lastName}</h2>
          <h2>{user.age}</h2>
          {
            user.phone.map((phone, index) => {
              <div key={index}>
                <h3>{phone.home}</h3>
                <h3>{phone.office}</h3>
              </div>
            })
          }
        </div>
      ))}
    </div>
  )
}

export default Mapping
