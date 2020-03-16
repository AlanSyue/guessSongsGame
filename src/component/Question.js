import React from 'react';

const Question = (props) => {
  const {name, urlPath, forceUpdateAt} = props;
  return (
    <div>
      <h3>歌名：{name}</h3>
      <iframe 
        width="100%" 
        height="auto" 
        src={`${urlPath}&forceUpdateAt=${forceUpdateAt}`}  
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
  </div>
  )
}

export default Question;
