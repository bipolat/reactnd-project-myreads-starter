
import React from 'react'
import Book from './Book';

class Shelf extends React.Component{

    render(){

        const  shelfBook=this.props.books;
        console.log("shelfBook",shelfBook);
        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {shelfBook.map(b => (
                        <li key={b.id}>
                            <Book book={b} changeBookShelf={this.props.changeShelf}/>
                        </li>
                    ))}          
              </ol>
            </div>
          </div>
        )}}

export default Shelf;

