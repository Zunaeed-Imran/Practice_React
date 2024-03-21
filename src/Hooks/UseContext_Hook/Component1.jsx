import React, { useState } from 'react'
import Component2 from './Component2';

import { UserContext1 } from './UseContext';

const Component1 = () => {

  const [name, setName] = useState({ id: 520, name1: "Md: Zunaeed Imran" });
  const [desc, setDesc] = useState("This is first description");


  return (
    <UserContext1.Provider value={{name, desc}}>
      <Component2/>
    </UserContext1.Provider>
  )
}

export default Component1;
