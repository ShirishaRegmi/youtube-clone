import React from 'react';
import Comments from './comments.js'

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading ...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof(video));
    return (
        <div>
            <div className='ui embed'>
                <iframe src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div className='ui segment'>
                <h4 className='ui header' style={{float: "left"}}>{video.snippet.title}</h4>
                <i class="fas fa-heart heart" style={{float: "right"}}></i>
                <p>{video.snippet.description}</p>
                <br/>

                <Comments/>


            </div>
        </div>

    )
}


export default VideoDetail;