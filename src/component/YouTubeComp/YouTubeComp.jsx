import React from 'react';
import './YouTubeComp.css';

const YouTubeComp = (props) => {
    return (
        <div className='youtube-wrapper'>
            <div className="img-thumb">
                {/* <img src="./gambarYt.png"/> */}
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    );
}

YouTubeComp.defaultProps = {
    time: 7.12,
    title: 'default title',
    desc: 'xx ditonton, x hari yang lalu'
}

export default YouTubeComp;