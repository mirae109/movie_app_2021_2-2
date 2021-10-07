import React, {Component} from 'react';
import axios from 'axios';


class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    const {
      data: {
        data: {movies}
      }
    } = await axios.get('http://yts-proxy.now.sh/list_movies.json');
    this.setState({ movies, isLoading: false });
  }

  componentDidMount(){
    this.getMovies
  }

  render() {
    const { isLoading } = this.state
    return (
      <div>
        { isLoading ? 'Loading...' : '영화데이터출력'}
      </div>
      )
    }
  }


export default App;
