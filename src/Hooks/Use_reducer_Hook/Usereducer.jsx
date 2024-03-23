import React, { useReducer, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';



const Usereducer = () => {

  const booksData = [
    { id: 1, name: "Pather pachall" },
    { id: 2, name: 'Padma Nadir Majhi' },
    { id: 3, name: "     Srikanto     " },
  ];

 


  const CustomModel1 = ({ modelText }) => {
    return <p>{modelText}</p>;
  };


  const reducer = (state, action) => {
    if (action.type === "ADD") {
      const allBooks = [...state.books, action.payload]
      return {
        ...state,
        books: allBooks,
        isModalOpen: true,
        modalText: "Book is Added"
      }
    }
    if (action.type === "REMOVE") {
      const filteredBooks = [...state.books].filter(book => book.id !== action.payload);
      return {
        ...state,
        books: filteredBooks,
        isModalOpen: true,
        modalText: "Book is remove",
      };
    }
    return state;
  };


  const [bookState, dispatch] = useReducer(reducer, {
    books: booksData,
    isModalOpen: false,
    modalText: '',
  });

  const [bookName, setBookName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { id: uuidv4().toString(), name: bookName };
    dispatch({ type: "ADD", payload: newBook })
    setBookName('');
  };

  const removeBook = (id) => {
    dispatch({ type: "REMOVE", payload: id })
  };

  return (
    <>
      <h2>Book list Practice One</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" value={bookName} onChange={e => {
            setBookName(e.target.value);
          }} />
        </div>
        <button type='submit'>Add Book</button>
      </form>

      {bookState.isModalOpen && <CustomModel1 modalText={bookState.modalText} />}
      {bookState.books.map(book => {
        const { id, name } = book;
        return <li key={id}>
          {name} <button onClick={() => {
            removeBook(id)
          }}>Remove</button>
        </li>;
      })}
    </>
  );
};

export default Usereducer;
