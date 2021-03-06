import React, { Component } from 'react';
import { Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import fire from './setting/fire';
import Demacia from './components/Demacia';
import Noxus from './components/Noxus';
import Ionia from './components/Ionia';
import Freljord from './components/Freljord';
import Zaun from './components/Zaun';
import Piltover from './components/Piltover';
import Main from './components/Main';
import Aboutme from './components/Aboutme';

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
          <Route exact path="/" component={Main} />
          <Route path="/Login" component={Login} />
          <Route path="/Main" component={Main} />
          <Route path="/Demacia" component={Demacia} />
          <Route path="/Noxus" component={Noxus} />
          <Route path="/Ionia" component={Ionia} />
          <Route path="/Freljord" component={Freljord} />
          <Route path="/Zaun" component={Zaun} />
          <Route path="/Piltover" component={Piltover} />
          <Route path="/Aboutme" component={Aboutme} />
        </div>
      </div>
    )
  }

}

export default App;
