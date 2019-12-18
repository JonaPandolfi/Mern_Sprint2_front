import React from 'react';
import '../styles/homeStyles.css';


//function Lista(props){

  const Lista = ({datos}) =>
  datos.map(dato => <li key={dato._id}><Objeto objeto = {dato}/>
  </li>)
//}



function Objeto(props){
var elements = [];
for(let element in props.objeto){
  
  console.log(element);
elements.push(<li key= {element}>{element}{props.objeto[element]}</li>);
  
};
return <ul>{elements}</ul>;
};

export default Lista;