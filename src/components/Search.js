
import React from 'react'
import Book from './Book';

class Search extends React.Component{

    
    render(){
        const allBooks=this.props.allBooks;
        
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.props.showSearchPage(false) }>Close</a>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"   onChange={(e) => this.props.Deneme(e.target.value)} />
           
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {allBooks.map(b => (
                <li key={b.id}>
                  <Book book={b} changeBookShelf={this.props.changeShelf} />
                </li>
                
              ))}  { console.error("bosönce") }
                 
             
             
              </ol>
            </div>
           </div>
        )}}

export default Search;

