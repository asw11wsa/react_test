import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
  state = {
    isLoading : true
  }

  componentDidMount(){
    setTimeout(function(){
      this.setState({isLoading:false})
    },6000)
  }
  render(){
    const {isLoading} = this.state;
    return(
      <div>
        {isLoading ? "Loading.." : "i am ready"}
      </div>
    );
  }
}

export default App;
