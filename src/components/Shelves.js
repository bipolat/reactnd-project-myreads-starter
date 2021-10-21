import React from 'react'
import Shelf from './Shelf';

class Shelves extends React.Component{

    render(){
    const allBooks=this.props.allBooks;

    const currentlyReading=allBooks.filter(book => book.shelf=== "currentlyReading")
    const WanttoRead=allBooks.filter(book => book.shelf=== "wantToRead")
    const read=allBooks.filter(book => book.shelf=== "read")

    console.log('Shelves',allBooks)

        return(
            <div className="list-books-content">
                <div>
        {/*Shelf "currentlyReading" */}
                <Shelf books={currentlyReading} title={"Currently Reading"} changeShelf={this.props.changeShelf}/>
        {/*Shelf WanttoRead */}
                <Shelf books={WanttoRead}  title={"Wantto Read"} changeShelf={this.props.changeShelf}/>
        {/*Shelf  "read" */}
                <Shelf books={read}  title={"Read"} changeShelf={this.props.changeShelf}/>
                </div>
            </div>
        )

    }
}

export default Shelves;

