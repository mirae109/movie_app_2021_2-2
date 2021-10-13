import {Component} from 'react';

class AppEx extends Component{

    state = {
        count: 0 
    }

    add = () => {
        this.setState({
            count: this.state.count +1
        });
    }

    minus = () => {
        this.setState({
            count: this.state.count -1
        });
    }

    render(){
        return(
            <div>
                <h1>the number is: {this.state.count}</h1>
            <button onClick={this.add}>+</button>
            <button onClick={this.minus}>-</button>
            </div>
        )
        }
}