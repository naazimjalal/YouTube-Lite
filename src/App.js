import './App.css';
import React from 'react'
import Appbar from './Components/Appbar'
import Homepage from './Components/Homepage'
import Vid from './Components/vid'
import Results from './Components/Results';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
function App() {
  const [i, seti] = React.useState('0')
  const [searchterm, setsearchterm] = React.useState('')
  async function submitted(id){
    seti(id)
  }
  const footerstyle={
    color: 'white',
    position: 'relative',
    bottom: '0px',
    background: 'black',
    width: '100%',
    padding: '16px 0px',
    textAlign: 'center',
    fontSize: '13px',
    fontFamily: 'Platform'
  }
  const search =(searchterm)=>{
    setsearchterm(searchterm)
    document.getElementById("homepage").style.display = "none";
    document.getElementById('searchresultspage').style.display = "flex";
     
  }
  return (
    <div className="App">
      <Appbar onSubmit={search}/>
      <div className="homepage" id="homepage"  >
        <Homepage onSubmit={submitted}/>
      </div>
      <div className="videopage" id="videopage" > 
        <Vid id={i}/>
      </div>
      <div className="searchresultspage" id="searchresultspage" style={{display: 'none'}}>
        <Results searchterm = {searchterm}/>
      </div>
      <footer style={footerstyle} id="foot">
        <h2>This App was Made By Naazim Jalal</h2><br />
        <h3>Checkout more apps on - <a href="https://naazim-apps.web.app/" className="linka">naazim-apps.web.app</a></h3>
        <h3>Instagram <InstagramIcon /> - <a href="https://www.instagram.com/naazim.jalal/" className="linka">instagram.com/naazim.jalal/</a></h3>
        <h3>Github <GitHubIcon /> - <a href="https://github.com/naazimjalal" className="linka">github.com/naazimjalal</a></h3>
      </footer>
    </div>
  );
}

export default App;
