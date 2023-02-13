import React from 'react';

const VideoList = ({ vids }) => {
  if(vids[0] !== undefined) {
    var topic = vids[0].topic;
  } else {
    var topic = 'Something New';
  }
  var indVid = vids.map((vid) => {
    return (
      <div id='vids' >
        <a href={vid.link}><img src={vid.thumbnail.url}></img></a>
        <p >{vid.title}</p>
        <p > Description: {vid.description}</p>
      </div>
    )
  });

  return(
  <div>
    <h4> Learn About {topic.toUpperCase()}</h4>
     {indVid}

  </div>
  )
}

export default VideoList;