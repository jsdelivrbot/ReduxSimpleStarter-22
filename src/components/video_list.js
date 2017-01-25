import React from 'react';

// In a functional component like below we pass props in through the arguments.
// In a class based component, the props are passed in through the constructor.
const VideoList = (props) => {

    return (
        <ul className="col-md-4 list-group">
            {props.videos.length}
        </ul>
    )   
}

export default VideoList;