import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelves from './components/Shelves'
import Search from './components/Search'
import SearchButton from './components/SearchButton'
import Header from './components/Header'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books:[],
    booksquery:[]
  }

  updateSearchPageState =(state) =>{
    console.log("updateSearchPageState",state);
    this.setState({showSearchPage:state})
  };

  componentDidMount(){
    BooksAPI.getAll().then(resp=>this.setState({books:resp}));
  }
  

  changeBookShelf = (book,shelf) =>{
   this.setState({
     books:this.state.books.map(b=>{
     if(b.id === book.id)     
      book.shelf = shelf;    
      return b;
     }
      
      )
   });

  }

  setQuery = (e) =>{
   console.log("degerqery",e)
    BooksAPI.search(e).then(resp=>this.setState({booksquery:resp}));
    console.log('setQuery',this.state.booksquery)
    
    }

 

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          //Seach
         <Search showSearchPage={this.updateSearchPageState} Deneme={this.setQuery}  allBooks= {this.state.booksquery} />
        ) : (
          <div className="list-books">
            {/*Header*/}
           <Header />

             {/*Shelves*/}
           <Shelves allBooks= {this.state.books}
           changeShelf={this.changeBookShelf}
           />
                {/*seach button*/}
           <SearchButton showSearchPage={this.updateSearchPageState}/>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
