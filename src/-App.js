import {Component} from 'react';

class App extends Component {

  constructor(props){
    super(props)
    console.log('constructor');
  }

  componentDidMount(){
    console.log('componentDidMount');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  state = {
    count: 0
  }

  //버튼을 이용해 수 증감하기 
  add = () => {
   this.setState({count : this.state.count +1});
  }

  minus = () => {
    this.setState({count : this.state.count -1});
  }

  render(){
    return (
      <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>add</button>
      <button onClick={this.minus}>minus</button>
      </div>
    )
  }
}

export default App;
