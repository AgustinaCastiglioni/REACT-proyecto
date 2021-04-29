import Header from './components/Headers';
import Tarjeta from './components/Tarjetas';
import Footer from './components/Footer';


import React, {Component} from 'react';

class App extends Component  {
  constructor(props){
    super(props);
    this.state={
       infoJson: [],
       infoOriginal: []
      
    }
}
componentDidMount(){
  fetch('https://randomuser.me/api/?results=20')
 .then(result=> result.json())
  .then(data=>{
    this.setState({infoJson: data.results, infoOriginal: data.results})
   } )
  }
resetTarjetas(){
  this.setState({
    infoJson: this.state.infoOriginal
      })
}

 agregarTarjeta(){
  var numeroagregar = document.getElementById("numeroTarjetas").value
 fetch('https://randomuser.me/api/?results='+ numeroagregar )
 .then(result=> result.json())
 .then(data=>{
  var nuevoArray= this.state.infoJson.concat(data.results)
 
 this.setState({
   infoJson: nuevoArray})
  } )
 }
  borrarTarjeta(id){
   
let resultado= this.state.infoJson.filter(info=> info.id !== id)

  this.setState({
infoJson: resultado
  })
  }

 filtrarNombre(name){
  var filtronombre = document.getElementById("nombreFiltro").value
  
  if(filtronombre.length !==0){
    let resultado= this.state.infoJson.filter(info=> info.name.first === filtronombre)
    this.setState({
      infoJson: resultado
       })
  }
  else {
    this.setState({
      infoJson: this.state.infoOriginal
       })
 
  }
}
  filtrarApellido(){
    var filtroapellido = document.getElementById("apellidoFiltro").value
   
  if(filtroapellido.length !==0){
    let resultado= this.state.infoJson.filter(info=> info.name.last === filtroapellido)
    this.setState({
      infoJson: resultado
       })
  }
  else {
    this.setState({
      infoJson: this.state.infoOriginal
       })
  }

    }

    filtrarEdad(){
      var filtroedad = document.getElementById("edadFiltro").value
     
        if(filtroedad.length !==0){
          let resultado= this.state.infoJson.filter((info)=>{
            let infoString= info.dob.age.toString()
            return infoString === filtroedad})
          this.setState({
            infoJson: resultado
             })
        }
        else {
          this.setState({
            infoJson: this.state.infoOriginal
             })
       
        }
     
      }

      filtrarPais(){
        var filtropais= document.getElementById("paisFiltro").value
       
       if(filtropais.length !==0){
        let resultado= this.state.infoJson.filter(info=> info.location.country === filtropais)
        this.setState({
          infoJson: resultado
           })
      }
      else {
        this.setState({
          infoJson: this.state.infoOriginal
           })
     
      }

        }
        ordenarNombreAsc(){

              let ordenarporascen= this.state.infoJson.sort((a,b)=> {return a.name.first> b.name.first ? 1:-1})
             
             this.setState({
               infoJson: ordenarporascen
              })
          
        }
        ordenarNombreDesc(){

          let ordenarpordesc= this.state.infoJson.sort((a,b)=> {return a.name.first < b.name.first ? 1:-1})
         
         this.setState({
           infoJson: ordenarpordesc
          })
       
    }

  render() {
  
  return (

<div className="App">
       <Header/>

       <div className="tarjetas">
    <button style={{textAlign:'center', margin: "5px" }} onClick= {(event)=> this.resetTarjetas()}>RESET CARDS</button>
    
   

    <input  className="uk-button uk-button-default " id='numeroTarjetas' placeholder='Ingresa el valor'/>
    <button onClick= {(event)=> this.agregarTarjeta()}>ADD CARDS</button>
    
      

<div className="uk-inline">
    <button class="uk-button uk-button-default" type="button">ORDENAR NOMBRE</button>
    <div uk-dropdown="pos: bottom-justify">
        <ul className="uk-nav uk-dropdown-nav">
            <li className="uk-active"><button onClick= {(event)=> this.ordenarNombreAsc()}>POR ASCENDENCIA</button></li>
            <li className="uk-active"><button onClick= {(event)=> this.ordenarNombreDesc()}>POR DESCENDENCIA</button></li>
        </ul>
    </div>
</div>
   
   
<div className="uk-inline">
    <button type="button" style={{margin: "5px"}}>FILTRAR</button>
    <div uk-dropdown="pos: right-center">
        <ul className="uk-nav uk-dropdown-nav">
            <li><input id='nombreFiltro' placeholder='Ingresa el nombre'/> 
            <button style={{textAlign:'center'}} onClick= {(event)=> this.filtrarNombre()}>FILTRAR NOMBRE</button>
            </li>
            <li><input id='apellidoFiltro' placeholder='Ingresa el apellido'/>
            <button style={{textAlign:'center'}} onClick= {(event)=> this.filtrarApellido()}>FILTRAR APELLIDO</button>
            </li>
            <li><input id='edadFiltro' placeholder='Ingresa la edad'/>
            <button style={{textAlign:'center'}} onClick= {(event)=> this.filtrarEdad()}>FILTRAR EDAD</button>
            </li>
            <li><input id='paisFiltro' placeholder='Ingresa el país'/>
            <button style={{textAlign:'center'}} onClick= {(event)=> this.filtrarPais()}>FILTRAR PAÍS</button>
            </li>
        </ul>
    </div>
</div>
      
       <div className="uk-flex uk-flex-between uk-flex-middle uk-flex-wrap" uk-sortable="handle: .uk-card">
      
      {
        //La info del estado es la que se modifica, poreso uso this.state.infoJson
        this.state.infoJson.map((tarjetas, idx)=>{
          return <Tarjeta 
          
          onDelete={this.borrarTarjeta.bind(this)} key={tarjetas.id} infoTarjetas={tarjetas} name={tarjetas.name.first} id={tarjetas.id} colorFondo='white'
                 />
        
        })
      }

    </div>  
    </div>
        <Footer/>
    </div>
  );
  
}
}


export default App;