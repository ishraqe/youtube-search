import _ from 'lodash';
import React, {Component} from  'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';

const APP_KEY= ' AIzaSyCyXIUFHS-Vy8VDJDAyQmZyUVK-0Fq-EBM ';


class App extends Component{
    constructor(props) {
        super(props);

        this.state={
            videos: [],
            selectedVideo: null
        };
        this.onVideoSearch('');
    }
    onVideoSearch(term){
        YTSearch({key : APP_KEY, term:term}, (videos) => {
            this.setState({
                videos:videos,
                selectedVideo: videos[0]
            });
        });
    }
    render() {
        const videoSearch= _.debounce((term) => {this.onVideoSearch(term)},300);

        return (
            <div>
                <SearchBar onSearchVideo={ videoSearch  }/>
                <VideoDetails  video={this.state.selectedVideo} />
                <VideoList onSelectedVideo={selectedVideo => this.setState({selectedVideo})} videos = {this.state.videos }/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));