import React from 'react'
import Avatar from '@material-ui/core/Avatar';
 
function video({thumbnail, channel_img, name, channel_name}) {
    
    return (
        <div className="video" >
            <img src={thumbnail} alt="thumbnail" className="thumbnail"/>
            <div className="info">
                <Avatar className="avatar" src={channel_img} style={{zIndex: '-1'}}/>
                <div className="text-info">
                    <div className="video-name">{name}</div>
                    <div className="channel-name">{channel_name}</div>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default video
