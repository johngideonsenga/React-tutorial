import React from 'react';

const VideoDetail = ({video}) =>{
    if(!video){
        return <div>Loading...</div>
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return(
        <div className="col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={url} frameBorder="0" className="embed-resonsive-item"></iframe>
            </div>
            <div className="py-4">
                <h4 className="font-weight-bold">{video.snippet.title}</h4>
                <p className="py-2" >{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;