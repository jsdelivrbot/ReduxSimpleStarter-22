import React from 'react';

const VideoDetail = (props) => {
    const videoId = video.id.videoID;
    const url = "http://www.youtube.com/embed/" + videoId;
    const video = props.video;

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