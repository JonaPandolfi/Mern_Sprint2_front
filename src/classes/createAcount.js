import React from 'react';
import '../styles/homeStyles.css';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import MYtineraryLogo from "../images/MYtineraryLogo.png";
import homeIcon from "../images/homeIcon.png"
import circledRight2 from "../images/circledRight2.png";
import data from "./itineraries.json"; 

const axios = require('axios');

class CreateAcount extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mostrar:data
        }
    }
    cargarCiudades(){
        this.state.mostrar.forEach(itinerary => {
            axios.post('http://localhost:5000/itineraries/', 
                 itinerary)
       .then(res => console.log(res))
       .catch(err => console.log(err));
   
        });
    }
    
    componentDidMount() {
        console.log(this.state.mostrar);
        this.cargarCiudades();
        this.timer = setInterval(() => console.log(this.state.mostrar), 5000);
      }

    render(){
        return(
            <div>
                
                <ul>
                <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/cities">Cities</Link>
                        </li>
                </ul>
                
                <h1>Acount</h1>

            </div>
        )

    }


}

export default CreateAcount;