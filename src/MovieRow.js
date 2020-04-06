import React, {Component} from 'react';

class MovieRow extends React.Component{
   viewMovie(){
       const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
       window.location.href = url
   }
   
   
    render(){
    return (
        <table key={this.props.movie.id}>
    <tbody>
     <tr>
       <td>
           <img width='100' alt="poster" src={this.props.movie.poster_src} />
       </td>
       <td>
          {this.props.movie.title}
       <p>{this.props.movie.overview}</p>
       <input type='button' onClick={this.viewMovie.bind(this)} value="View"/>
       </td>
     </tr>
     </tbody>
     </table>
     )

    }
}
export default MovieRow;