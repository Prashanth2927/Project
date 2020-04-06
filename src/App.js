import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow';
import $ from 'jquery';
//import Products from './Components/Products';
//import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
//import AddPage from './Components/AddPage';


export default class App extends Component {
  constructor(props){
    super(props);
      this.state={
          rows: ''
      }

  
  /*const movies= [
    {id:'1', poster_src:'John Wick.jpg', title:'John Wick', overview:'Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.'},
    {id:'2', poster_src:'Ad Astra.jpg', title:'Ad Astra', overview:'The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.'}
  
  ]
  
    var movieRows= [];
   movies.forEach((movie)=>{
    const movieRow = <MovieRow movie={movie}/>
      movieRows.push(movieRow)
   })
   
   this.state={
    rows: movieRows,
  }*/

     this.performSearch("avengers")

  }

  performSearch(searchTerm){
     const urlString= "https://api.themoviedb.org/3/search/movie?api_key=fb5ff6bf0f9582783e48fd20162740f5&query=" + searchTerm
    $.ajax ({
        url: urlString,
        success: (searchResults) =>{
          console.log("success")
          const results = searchResults.results

           var movieRows=[]
             results.forEach((movie)=>{
               movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
              const movieRow = <MovieRow key={movie.id} movie={movie} />
               movieRows.push(movieRow)   
             })

             this.setState({rows: movieRows})
        },
        error: (xhr, status, err) =>{
          console.log("error")
        } 
        
    })

    }

    searchChangeHandler=(event)=>{
      const searchTerm = event.target.value
      this.performSearch(searchTerm)
    }


  render() {
    return (
      <div >
          <table style={{
            backgroundColor: 'orange',
            display:"block",
            color:'#fff',
            paddingLeft: 16
          }}> 
            <tbody>
              <tr>
                <td>
                  <img alt='app icon' width='50' src="movieimg.png"/>
                </td>
                <td width='8' />
                <td >
                  <h1>MovieDB Search</h1>
                </td>
              </tr>
            </tbody>
          </table>
          <input style={{
            fontSize:24,
            display:'block',
            width: '99%',
            paddingTop:8,
            paddingBottom:8,
            paddingLeft:16,
          }}
                 onChange= {this.searchChangeHandler.bind(this)}
                 placeholder="Search" />

                 {this.state.rows}
      </div>
    
    
    
      /*<Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Products} />
            <Route path="/AddPage" component={AddPage} />
          </Switch>
        </div>
      </Router>*/
    );
  }
}