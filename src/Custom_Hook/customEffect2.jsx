import React, { useState, useEffect } from 'react';

const customEffect2 = (url) => {
  const [data2, setData2] = useState(null);
  const [loading2, setLoading2] = useState(true);
  const [error2, setError2] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res2 => {
          if (!res2.ok) {
            throw Error('There is a error function');
          } else {
            return res2.json();
          }
        })
        .then(data2 => {
          setData2(data2);
          setLoading2(false);
          setError2(null);
        })
        .catch(error2 => {
          setError2(error2.message);
          setLoading2(false);
        });
    }, 2000);
  }, [url]);

  return { data2, loading2, error2 };
};

export default customEffect2;
