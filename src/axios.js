import React from "react";
import axios from 'axios';

class Appaxios extends React.Component{
    state = {
        isLoading: true,
        movies:[]
    };

    getMovies = async () => {
        const {
            data: {
                data: { movies },
            },
        } = await axios.get('http//....json');
        this.setState({movies: movies});
    };

    componentDidMount(){
        this.getMovies();
    }

    render(){
        const { isLoading } = this.state;
        return <div>{isLoading ? 'Loading...' : 'We are ready'} </div>
    }

}