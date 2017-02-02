import React, { Component } from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search'
import VideoList from './video_list';
import VideoDetail from './video_detail';
import _ from 'lodash';

const API_KEY = 'AIzaSyB4GW_4vfe_XBD6wyuqItFhRHrmFr-ckJk';

export default class App extends Component {
  // When a user creates an input we need to put the results of that in the state:
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('surfboards');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      //this.setState({videos}) // this.setState({videos: videos})

      // want to set state for all selected videos and all videos that come back from the API:
       this.setState({
         videos: videos,
         selectedVideo: videos[0]
       })
    })
  }

  render() {

    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 3000);

    return (
      <div>
        <SearchBar  onVideoSearchTerm={(term) => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}  />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo: selectedVideo})} 
          videos={this.state.videos} />
      </div>
    );
  }
}
