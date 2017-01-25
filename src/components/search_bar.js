import React, { Component } from 'react';

/*
const SearchBar = () => {
    return <input />
}
*/

class SearchBar extends React.Component {

    // This is the first function that is called when a new instance of a class is 
    // created - in this case when this class is created.
    // - here we can initialize the setup - such as setting up the state.
    constructor(props){
        // the super method below allows us to call the constructor of the parent class of this class
        super(props);
        
        // the state here is where we hold properties that we want to record in this component 
        this.state = {
            term: ''
        }
    }

    render() {
        return (
          <div>
            <input 
              value={this.state.term}
              onChange={(event) => this.setState({ term: event.target.value })} />
          </div>
        );
    }

}

export default SearchBar;