import React from 'react';

/*
const SearchBar = () => {
    return <input />
}
*/

class SearchBar extends React.Component {
    render() {
        return <input onChange={(event) => console.log(event.target.value)} />
    }

}

export default SearchBar;