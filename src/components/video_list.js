import React from 'react';
import VideoListItem from 'react'

// In a functional component like below we pass props in through the arguments.
// In a class based component, the props are passed in through the constructor.
const VideoList = (props) => {

    // create an array of video list items:
    const videoItems = props.videos.map((video) => {
        return <VideoListItem key={video.etag} video={video} />
    })

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )   
}

export default VideoList;