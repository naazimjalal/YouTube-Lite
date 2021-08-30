import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import './Appbar.css'
import TextField from '@material-ui/core/TextField';
export default({onSubmit})=> {
    const [searchtext, setsearchtext] = React.useState('')
    const search =()=>{
        document.getElementById('Appbar').style.height ="74px"
        document.getElementById('Appbar-logo').style.display = 'none';
        document.getElementById('outlined-helperText').style.display = 'flex';
    }
    const onKeyPress =(event)=>{
        if(event.key === "Enter"){
            onSubmit(searchtext)
        }
    }
    const Change =(e)=>{
        console.log(e.target.value)
        setsearchtext(e.target.value)
    }
    const litestyles = {
        color: 'white',
        fontSize: '26px',
        position: 'relative',
        top: '19px',
        fontFamily: 'Poppins',
    }
    
    return (
        <div className="Appbar" id="Appbar" style={{height: '74px'}} onLoad={onKeyPress}>
            <div id="Appbar-logo" >
                <img src="https://i.pinimg.com/736x/e7/ec/b8/e7ecb88f8aa92d1b9d1925558032a497.jpg" alt ="logo" id="logo-img"/><h1 style={litestyles}>Lite</h1>
            </div>
            <div className="Search-area">
            <TextField
            id="outlined-helperText"
            helperText="Some important text"
            variant="outlined"
            onChange={Change}
            onKeyPress={onKeyPress}
            />
            </div>
            <div className="icons">
                <SearchIcon className="icon-svg" style={{width: '25px', height: '25px'}} onClick={search}/>
                <AccessTimeIcon className="icon-svg" style={{width: '25px', height: '25px'}}/>
                <Avatar className="avatar" style={{width: '25px', height:' 25px', left: '8px' }}>N</Avatar>
            </div>
        </div>
    )
}