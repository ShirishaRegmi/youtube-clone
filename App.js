import React from 'react';
import NavBar from './NavBar.js';
import youtube from './Youtube.js';
import VideoDetail from './VideoDetail.js';
import VideoList from './VideoList.js';
import AppCSS from './App.css';


class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };
  handleSubmit = async (termFromSearchBar) =>{
    const response = await youtube.get('/search',{
      params: {
        q: termFromSearchBar
      }
    })
    this.setState({
      videos: response.data.items
    })
  };
  handleVideoSelect = (video) =>{
    this.setState({selectedVideo: video})
  }

 render(){
   
  return (
    <div className="container">
      <NavBar handleButtonSubmit={this.handleSubmnit}/>
      <VideoDetail video={this.state.selectedVideo} id="playVideo" style={AppCSS}/>
      <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.videos} id="listVideos" style={AppCSS}/>

    </div>
  );
}
}
export default App;
