import React from 'react';


const VideoListItems = ({video, onSelectedVideo}) => {
    const imgUrl= video.snippet.thumbnails.default.url;

    return (
        <li onClick={()=> onSelectedVideo(video)} className="list-group-item" >
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imgUrl} alt=""/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItems;