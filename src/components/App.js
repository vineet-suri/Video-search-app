import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetail';

class App extends Component {
    state = { videos: [] , selectecVideo : null }
    
    componentDidMount(){
        this.onSearchSubmit('buildings');
    }

    onSearchSubmit = async (term) => {
        const res = await youtube.get('/search', {
            params: { q: term }
        });
        
        this.setState({ videos: res.data.items, selectecVideo:res.data.items[0]});
    }

    onVideoSelect = (video) => {
        this.setState( { selectecVideo: video });
    }

    render() { 
        return (<div className="ui container">
            <SearchBar onSubmit={this.onSearchSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetails video={this.state.selectecVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList 
                            videos={this.state.videos} 
                            onVideoSelect={this.onVideoSelect}
                            />
                    </div>
                    
                </div>
            </div>
        </div> 
         );
    }
}
 
export default App;