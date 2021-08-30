import React from 'react'
import './Homepage.css'
import Video from './video'
import axios from 'axios'
export default ({ onSubmit })=>{
    const [videos, setvideos] = React.useState(0)
    const [pfp, setpfp] = React.useState(0)
    let a = []
    const gettrend = async()=>{
        const { data: { items: videos } } = await axios.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=AIzaSyBBnUsJGanTevm6Cn4nDotYY2jyKi5julM")
        const { data: { items: pfp1 } } = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${videos[0].snippet.channelId}&key=AIzaSyAAkaldpyZ2Wu34vExTwIVpH3B3gHNpgqo`)
        a.push(pfp1[0].snippet.thumbnails.high.url)
        const { data: { items: pfp2 } } = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${videos[1].snippet.channelId}&key=AIzaSyAAkaldpyZ2Wu34vExTwIVpH3B3gHNpgqo`)
        a.push(pfp2[0].snippet.thumbnails.high.url)
        const { data: { items: pfp3 } } = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${videos[2].snippet.channelId}&key=AIzaSyAAkaldpyZ2Wu34vExTwIVpH3B3gHNpgqo`)
        a.push(pfp3[0].snippet.thumbnails.high.url)
        const { data: { items: pfp4 } } = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${videos[3].snippet.channelId}&key=AIzaSyAAkaldpyZ2Wu34vExTwIVpH3B3gHNpgqo`)
        a.push(pfp4[0].snippet.thumbnails.high.url)
        const { data: { items: pfp5 } } = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${videos[4].snippet.channelId}&key=AIzaSyAAkaldpyZ2Wu34vExTwIVpH3B3gHNpgqo`)
        a.push(pfp5[0].snippet.thumbnails.high.url)
        setvideos(videos)
        setpfp(a)
        
    }
    React.useEffect(() => {
        gettrend()
    }, [])
     
    function selected(id){
        document.getElementById('homepage').style.display = 'none'
        document.getElementById('videopage').style.display = 'flex'
        onSubmit(id)
    }
    if (videos !== 0){
        
    return (
        <div>
             
            <br />
            <br />
            <br />
            <br />
             
            <div onClick={()=>{selected(videos[0].id)}}><Video  thumbnail={videos[0].snippet.thumbnails.high.url}
                    channel_img =  {pfp[0]}
                    name =  {videos[0].snippet.title}
                    channel_name={videos[0].snippet.channelTitle}
                    id={videos[0].id} /></div><br />
            <div onClick={()=>{selected(videos[1].id)}}><Video thumbnail={videos[1].snippet.thumbnails.high.url}
                    channel_img =  {pfp[1]}
                    name =  {videos[1].snippet.title}
                    channel_name={videos[1].snippet.channelTitle}
                    id={videos[1].id}   /></div><br />
            <div onClick={()=>{selected(videos[2].id)}}><Video thumbnail={videos[2].snippet.thumbnails.high.url}
                    channel_img =  {pfp[2]}
                    name =  {videos[2].snippet.title}
                    channel_name={videos[2].snippet.channelTitle}  
                    id={videos[2].id} /></div><br />
           <div onClick={()=>{selected(videos[3].id)}}><Video thumbnail={videos[3].snippet.thumbnails.high.url}
                    channel_img =  {pfp[3]}
                    name =  {videos[3].snippet.title}
                    channel_name={videos[3].snippet.channelTitle} 
                    id={videos[3].id}  /></div><br />
            <div onClick={()=>{selected(videos[4].id)}}><Video thumbnail={videos[4].snippet.thumbnails.high.url}
                    channel_img =  {pfp[4]}
                    name =  {videos[4].snippet.title}
                    channel_name={videos[4].snippet.channelTitle} 
                    id={videos[4].id} /></div><br />
             
        </div>
    )}else{
        return(
            <div>loading...</div>
        )
    }
}

