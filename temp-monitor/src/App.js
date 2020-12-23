import React from 'react';
import Auth from './Auth';
import Temp from './temp';
import './App.css';
/*
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {apiResponse:""};
  }

  callAPI() {
    fetch("http://localhost:5000/testAPI")
    .then(res => res.text())
    .then(res => this.setState(apiResponse= res))
  }

  componentWillMount(){
    this.callAPI();
  }
}
*/
function App() {
  return (
    <div className="App">
      <div className="app__body">
        <Auth />
      </div>
    </div>
  );
}

export default App;
