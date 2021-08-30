import React from 'react'
import axios from 'axios'
function Results({searchterm}) {
    const [results, setresults] =React.useState(0)
    const [id, setid] =React.useState('')
     
    const findresults=async(searchterms)=>{
         
        const { data: { items: videos } } = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBzSan-a8jwYOgc-uaS2cVCAK9p7lQgaL0&part=snippet&q=${searchterms}&maxResults=7`)
        setresults(videos)
        
    }
    const setvideo=(videoid)=>{
        setid(videoid)
        document.getElementById('videoplayer').style.display ="flex"
        document.getElementById('videoplayer').style.opacity ="100%"
        
    }
    React.useEffect(() => {
         
        findresults(searchterm)
        
    }, [searchterm]) 
     
    const Video =({img, title, name, id })=>{
        return(
            <div style={{display: 'flex'}} onClick={()=>{setvideo(id)}}>
                <img src ={img} alt="Thumbnail" className="resthumbnail" />
                <div className="resinfo">
                    <h2 className="restitle">{title}</h2>
                    <h3 className="restname">{name}</h3>
                </div>
            </div>
        )
    }
    if (results!==0){
        const vidstyle = {
            width: '100vw',
            position:' relative',
            top: '-78px',
            paddingTop: '58px',
            display: 'none',
            opacity: '0',
            transition: '4s',
        }
        let vidsrc = `https://www.youtube.com/embed/${id}`
        return (
            <div style={{paddingTop: '98px'}}>
                 <iframe 
                id = 'videoplayer'
                style={vidstyle}
                frameBorder="0"
                className="videoplay"
                height="340"
                width="730"
                title="Video Player"
                src={vidsrc}
                allowfullscreen="allowfullscreen"
                />  
                <Video img = {results[0].snippet.thumbnails.high.url}
                title={results[0].snippet.title}
                name={results[0].snippet.channelTitle}
                id={results[0].id.videoId}/>
                <br />
                <Video img = {results[1].snippet.thumbnails.high.url}
                title={results[1].snippet.title}
                name={results[1].snippet.channelTitle}
                id={results[1].id.videoId}/>
                <br />
                <Video img = {results[2].snippet.thumbnails.high.url}
                title={results[2].snippet.title}
                name={results[2].snippet.channelTitle}
                id={results[2].id.videoId}/>
                <br />
                <Video img = {results[3].snippet.thumbnails.high.url}
                title={results[3].snippet.title}
                name={results[3].snippet.channelTitle}
                id={results[3].id.videoId}/>
                <br />
                <Video img = {results[4].snippet.thumbnails.high.url}
                title={results[4].snippet.title}
                name={results[4].snippet.channelTitle}
                id={results[4].id.videoId}/>
                <br />
                <Video img = {results[5].snippet.thumbnails.high.url}
                title={results[5].snippet.title}
                name={results[5].snippet.channelTitle}
                id={results[5].id.videoId}/>
                <br />
                <Video img = {results[6].snippet.thumbnails.high.url}
                title={results[6].snippet.title}
                name={results[6].snippet.channelTitle}
                id={results[6].id.videoId}/>
                <br />
            </div>
        )
    }else{
        return(
            <h1>k</h1>
        )
    }
}

export default Results
