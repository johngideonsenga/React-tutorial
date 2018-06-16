import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCPYDoteSU4kHmm2O7Nd56jTzoDnXmQPvA';

//create component
class App extends Component{
    constructor(props){
        super(props);
        this.state = { 
            videos:[], 
            selectedVideo: null,
        };
        this.videoSearch('');
    }

    videoSearch(term){
        //fetch videos from youtube
        YTSearch({key:API_KEY, term:term}, (videos) =>{
            this.setState({ 
                videos:videos,
                selectedVideo: videos[0]
            }); 
        });
    }

    render(){
        //lodash 400ms
        const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 400);
        return (
            <div className="container-fluid">
                <SearchBar onSearchTermChange={videoSearch}/>
                <div className="row mx-4">
                    <VideoDetail video={this.state.selectedVideo}/>
                    <VideoList 
                        onVideoSelect={selectedVideo=>this.setState({selectedVideo})} //callback
                        videos={this.state.videos}/>
                </div>
            </div>
        );
    }
}

//render component
ReactDOM.render(<App />, document.getElementById("root"));