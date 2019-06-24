import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';

class App extends Component {
  state = {  
    noticias: []
  }

  componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'general') => {
    const url = `
    https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=637a4824d18f44c4819e933b42275591`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    console.log(noticias.articles);
    this.setState({
      noticias : noticias.articles
    })
  }

  render() { 
    
    return (  
      <Fragment>
        <Header 
            titulo='Noticias React API'
          />

          <div className="container white contenedor-noticias">
            <Formulario 
              consultarNoticias={this.consultarNoticias}
            />

            <ListaNoticias 
              noticias={this.state.noticias}
            />

          </div>
      </Fragment>
      

    );
  }
}
 
export default App;
