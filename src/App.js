import React, { Component } from 'react';
import { Route,BrowserRouter,Link,Router } from 'react-router-dom';
import logo from './logo.jpg';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import fire from './setting/fire';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }
  componentDidMount() {
    this.authListener()
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
      else {
        this.setState({ user: null })
      }
    })
  }
  
  render() {
    if (this.state.user == null) {
      return (
        <div>
          <div className="App">
      <header className="App-header">
        <div><Login/></div>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p><br></br>
          สวัสดีชาว Summonner อยากรู้เรื่องราวของอาณาจักรต่างๆ ในเกมส์ League of Legends ไหมเข้ามาสิ 
        </p>
      </header>
    </div>
        </div>

      );
    }
    return (
      <div>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/Login" component={Home} />
          <Route path="/Demacia" component={Home} />
          <Route path="/Noxus" component={Home} />
          <Route path="/Ionia" component={Home} />
          <Route path="/Freljord" component={Home} />
          <Route path="/Zaun" component={Home} />
          <Route path="/Piltover" component={Home} />
        </div>
      </div>
    )
  }
//   render() {
//   return (
    // <div className="App">
    //   <header className="App-header"><Login/>
    //    <img src={logo} className="App-logo" alt="logo" />
    //     <p><br></br>
    //       สวัสดีชาว Summonner อยากรู้เรื่องราวของอาณาจักรต่างในเกมส์นี้ไหม เข้ามาสิ 
    //     </p>
    //   </header>
    // </div>  
//   )
// }
}

export default App;
