
import React from 'react'

class SearchButton extends React.Component{

    render(){
        return(
            <a className="open-search">
              <button  onClick={() => this.props.showSearchPage(true)}>Add a book</button>
            </a>
        )}}

export default SearchButton;

