import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import './video.css'
export default ({ video, onVideoSelect }) => {
  const styles = theme => ({
    drawerPaper: { background: "blue" }
});
  return (
    <Grid item xs={12}>
      <Paper classname = "paper" style={{ background :"rgb(30, 30, 30)", alignItems: "center", cursor: "pointer" }} onClick={() => onVideoSelect(video)} >
        <img className="thumbnail" style={{ marginRight: "20px" }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
        <Typography variant="subtitle1">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
}
