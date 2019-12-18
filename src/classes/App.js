import React from 'react';
import '../styles/homeStyles.css';
import { Route, Link, BrowserRouter, Switch} from 'react-router-dom';
import MYtineraryLogo from "../images/MYtineraryLogo.png";
import homeIcon from "../images/homeIcon.png";
import circledRight2 from "../images/circledRight2.png";
import Login from "./login";
import Home from "./home";
import CreateAcount from "./createAcount";
import Cities from "./cities";

class App extends React.Component{
constructor(props){
  super(props);
}

render() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route  path='/login' component={Login} />
          <Route  path='/createAcount' component={CreateAcount} />
          <Route  path='/cities' component={Cities} />
         
        </Switch>
      </div>
    </BrowserRouter>
  );
}


}

export default App;
