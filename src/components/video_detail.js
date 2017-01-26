import React from 'react';

const VideoDetail = ({video}) => {
    // argument above same as: const video = props.video;
    if(!video){
      return <div>Loading... </div>  
    }
    
    const videoId = video.id.videoID;
    const url = "http://www.youtube.com/embed/" + videoId;
    

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={url} className="embed-responsive-item"></iframe>
            </div>
            <div className="detail">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
};

export default VideoDetail;