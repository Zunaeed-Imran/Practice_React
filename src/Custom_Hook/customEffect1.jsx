import React, { useState, useEffect } from 'react';


const customEffect1 = (url) => {

  const [data1, setData1] = useState(null);
  const [isloading1, setIsloading1] = useState(true);
  const [error1, setError1] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res1) => {
          if (!res1.ok) {
            throw Error("Can't done with fetch");
          } else {
            return res1.json();
          }
        })
        .then((data1) => {
          setData1(data1);
          setIsloading1(false);
          setError1(null);
        })
        .catch((error1) => {
          setError1(error1.message);
          setIsloading1(false)
        });
    }, 500);
  }, [url]);

  return { data1, isloading1, error1 };
}

export default customEffect1;
