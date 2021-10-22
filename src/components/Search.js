
import React from 'react'
import Book from './Book';
import * as BooksAPI from '../BooksAPI'
import { Link } from "react-router-dom";

class Search extends React.Component{

  state = {
    query: "",
    searchedBooks: [],
  };

  async updateQuery(query) {
    console.log("updateQuery",query)
    if (query !== null && query !== "") {
      this.setState(() => ({ query: query }));
      const books = await BooksAPI.search(query);
      if (!books.error) {
        this.setState(() => ({ searchedBooks: books }));
      } else {
        this.setState(() => ({ searchedBooks: [] }));
      }
    } else {
      this.setState(() => ({ query: query.trim(), searchedBooks: [] }));
    }
  }

  getbookShelf = (b) => {
    const { allBooks } = this.props;
    var selectBook = allBooks.filter((_) => _.id === b.id);
    if (selectBook.length > 0) {
      b.shelf = selectBook[0].shelf;
    } else {
      b.shelf = "none";
    }

    return b;
  };
  
    
    render(){
        
        
        return(
            <div className="search-books">
            <div className="search-books-bar">
            <Link to="/" className="close-search">
            Close
          </Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"                
                value={this.query}
              onChange={(event) => this.updateQuery(event.target.value)
              } />
           
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {this.state.searchedBooks &&
              this.state.searchedBooks.map(b => (
                <li key={b.id}>
                  <Book book={this.getbookShelf(b)} changeBookShelf={this.props.changeShelf} />
                </li>
                
              ))}  
                 
             
             
              </ol>
            </div>
           </div>
        )}}

export default Search;

