import React from 'react';
import '../styles/homeStyles.css';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import MYtineraryLogo from "../images/MYtineraryLogo.png";
import homeIcon from "../images/homeIcon.png"
import circledRight2 from "../images/circledRight2.png"

class App extends React.Component{
constructor(props){
  super(props);
}

render() {
  return (
    <div className="Home">
      <header className="App-header">
        <img src={MYtineraryLogo} className="App-logo" alt="MYtinerary" />
        
                      <ul>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/createAcount">Create Acount</Link>
                        </li>
                        <li>
                            <Link to="/cities">Cities</Link>
                        </li>
                    </ul>
        
      </header>
      <section>
        <article className = "Main-body">
          <p>
            Find your perfect trip, designed by insiders who know and love their cities.
         </p>
         <div className = "start">
           <h3>Start browsing</h3>
         <a
           className="Start-button"
           href="#"
           target="_self"
           rel="noopener noreferrer"
         >
            <img src ={circledRight2} alt ="start"/>
          </a>
          </div>
        </article>
        <article className = "Acount">
          <p>
            Want to build your own MYtinerary?
          </p>
          <a
           href="#"
          >
             Log in
          </a>
          <a
            href="#"
          >
            Create Account
          </a>
        </article>
      </section>
      <footer>
        <a href="#">
          <img src = {homeIcon} alt = "home"/>
        </a>
      </footer>
    </div>
  );
}
}
export default App;
