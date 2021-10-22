import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelves from './components/Shelves'
import Search from './components/Search'
import { Route } from "react-router-dom";


class BooksApp extends React.Component {
  state = {   
    books:[],
    booksquery:[]
  }


  async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.setState(() => ({ books }));
  }
  

  changeBookShelf = (book,shelf) =>{
    book.shelf = shelf;
    BooksAPI.update(book, shelf).then(() => {
      this.setState((currentBooks) => ({
        books: [...currentBooks.books.filter((b) => b.id !== book.id), book],
      }));
    });
  }
  render() {
    return (
      <div className="app">
        <Route exact path="/search">
          <div>
            <Search   
            changeShelf={this.changeBookShelf} />
          </div>
        </Route>
        <Route exact path="/">
         <div className="list-books">
           <Shelves 
           allBooks= {this.state.books}  
           changeShelf={this.changeBookShelf}/>
          </div>
        </Route>
      </div>
    )
  }
}

export default BooksApp
