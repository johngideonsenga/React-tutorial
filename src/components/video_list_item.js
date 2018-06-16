import React from 'react';

const VideoListItem = ({video, onVideoSelect}) =>{
    const imgUrl = video.snippet.thumbnails.default.url;
    return(
        //call onVideoSelect()
        <li onClick={()=>onVideoSelect(video)} className="list-group-item">
            <div className="media">
                <div className="media-left">
                    <img src={imgUrl} alt="" className="media-object"/>
                </div>
                <div className="media-body">
                    <div className="media-heading mx-2">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;