import React, { Component } from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search'
import VideoList from './video_list';
import VideoDetail from './video_detail';

const API_KEY = 'AIzaSyB4GW_4vfe_XBD6wyuqItFhRHrmFr-ckJk';

export default class App extends Component {

  // When a user creates an input we need to put the results of that in the state:
  
  constructor(props){
    super(props);
    this.state = {
      videos: []
    }

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({videos}) // this.setState({videos: videos})
    })

  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}  />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
