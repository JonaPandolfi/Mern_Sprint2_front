import React from 'react';
import '../styles/homeStyles.css';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import MYtineraryLogo from "../images/MYtineraryLogo.png";
import homeIcon from "../images/homeIcon.png"
import circledRight2 from "../images/circledRight2.png";

class Login extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                
                <ul>
                <li>
                        <Link to="/createAcount">Create Acount</Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/cities">Cities</Link>
                        </li>
                </ul>
                
                <h1>Login</h1>

            </div>
        )

    }


}

export default Login;