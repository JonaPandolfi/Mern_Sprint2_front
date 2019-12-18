import React from 'react';
import '../styles/homeStyles.css';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import MYtineraryLogo from "../images/MYtineraryLogo.png";
import homeIcon from "../images/homeIcon.png"
import circledRight2 from "../images/circledRight2.png";
import Lista  from "./list";


//const cityModel = require('../../../server/models/cityModel');

const axios = require('axios');


class Cities extends React.Component{
    constructor(props){
        super(props);
        this.state={
            ciudades:[],
            mostrar:[],
            isFetching: Boolean,
            alert: false,
            busqueda:{
            ciudad: '',
            pais: '',
            }

        }
    }
    
    solicitud = () => {
        axios.get('http://localhost:5000/cities/all', {
            responseType: 'json'
          }).then(response => {
              console.log(response.data);
            this.setState({ciudades : response.data, mostrar : response.data, 
                                           isFetching: false})}).catch(e => console.log(e));
      }

    ciudadesMostrar = (ciudadesRecibidas) => {

            let mostrar = this.state.ciudades
        
            mostrar = mostrar.filter((ciudad) => {
        
              let ciudadCargar = ciudad.name.toLowerCase() + ciudad.country.toLowerCase()
        
              return ciudadCargar.indexOf(
        
                ciudadesRecibidas.toLowerCase()) !== -1
        
            })
        
            this.setState({
        
              mostrar
        
            })
        
          
    //    var arrayaux=[];
    //    array.forEach(obj => {
    //        if(this.state.busqueda.ciudad === '' && this.state.busqueda.pais === ''){
    //         arrayaux.push(obj);
    //         this.setState(this.state.alert = false);
    //        }else if(this.state.busqueda.ciudad.toLowerCase() === obj.name.toLowerCase() && this.state.busqueda.pais.toLowerCase() === obj.country.toLowerCase()){
    //            arrayaux.push(obj);
    //            this.setState(this.state.alert = false);
    //        }else if(this.state.busqueda.ciudad.toLowerCase() === obj.name.toLowerCase() && this.state.busqueda.pais === ''){
    //            arrayaux.push(obj);
    //            this.setState(this.state.alert = false);
    //        }else if(this.state.busqueda.ciudad === '' &&
    //         this.state.busqueda.pais.toLowerCase() === obj.country.toLowerCase()){
    //             arrayaux.push(obj);
    //             this.setState(this.state.alert = false);
    //         }else{
    //             this.setState(this.state.alert = true);
    //         }
    //    });

    }

    onChange = (e) => {
        var busqueda = this.state.busqueda;
        busqueda[e.target.name] = e.target.value;

        this.setState(busqueda);

        console.log(this.state);

        

    }

    
    componentDidMount() {
        this.solicitud();
        this.setState(this.state.mostrar = this.state.ciudades);
        this.timer = setInterval(() => this.solicitud(), 5000);
      }
       
    componentWillUnmount() {
        this.timer = null;
      }  



    render(){
        let alerta = '';
    if (this.state.alert) {
      alerta = <h1>Lo sentimos, no se encontro la ciudad que buscaba</h1>;
    } else {
      alerta = '';
    }
  
        return(
            <div>
                
                <ul>
                <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/createAcount">Create Acount</Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                </ul>
                
                <h1>Hola</h1>
                         <div>
            <h1>Buscar ciudades</h1>
            <form action="">
                 <label htmlFor="">
                   Ciudad:
                    <input name = "ciudad" value={this.state.busqueda.ciudad} type="text" onChange={this.onChange}/>
                </label>
               <label htmlFor=""> 
                   Pais:
                   <input name = "pais" value={this.state.busqueda.pais} type="text" onChange={this.onChange}/>
                </label>



            </form>
                {alerta}
                     </div>
                
                <Lista datos= {this.state.mostrar} match = {this.state.busqueda} onChange={this.ciudadesMostrar}/>

            </div>
        )

    }


}

export default Cities;