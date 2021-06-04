import { useEffect, useState } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import BookList from './componetnt/BookList';
import BookClub from './componetnt/BookClub';
import Navbar from './componetnt/Navbar';
import BookDetails from './componetnt/BookDetails';




function App() {
  const[favorites , setFavorites]=  useState([]);
  const[books, setBooks]= useState([]);

  const fetchBooks = () => {
    fetch("https://fakerapi.it/api/v1/books?_quantity=15")
    .then ((res) => res.json())
    .then ((books) => setBooks(books.data ));
  };
  useEffect (fetchBooks, [])

  const handleFavorite = (bookInfo) => {
    
    setFavorites([...favorites, bookInfo] );

  };
  return (
    <div className="App">
      <Navbar/>
      <Switch> 
      <Route path='./bookclub'> 
      <BookClub favoriteList= {favorites}/>
      </Route>
      <Route exact path='/' render={() => ( <BookList handleFavorite={handleFavorite} booksInfo={books} />)} />

      <Route path='/books/:isbn' render={(routeProps) => <BookDetails routeProps={routeProps} books={books}/>} />
      </Switch>
    </div>
  );
}

export default App;
