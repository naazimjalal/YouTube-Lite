import React from 'react'

function vid({id}) {
    const vidstyle = {
        width: '100vw',
        position:' relative',
        top: '16px',
        paddingTop: '58px'
    }
    let vidsrc = `https://www.youtube.com/embed/${id}`
    return (
        <React.Fragment>
        <iframe 
          style={vidstyle}
          frameBorder="0"
          className="videoplay"
          height="340"
          width="730"
          title="Video Player"
          src={vidsrc}
          allowfullscreen="allowfullscreen"
        /> 
    </React.Fragment>
         
    )
}

export default vid
