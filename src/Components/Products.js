import React, {Component} from 'react';
import './Products.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import AddPage from './AddPage';

export default class Products extends React.Component{
      constructor(props) {
      super(props) 
      this.state = { 
         students: [
            { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
            { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
            { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
            { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
         ],
         add:
           { id:'', name:'', age:'', email: ''},
           showAddPage: false
      }
  
   }

   OnClickAdd=()=>{
       const doesShow=this.state.showAddPage;
       this.setState({showAddPage:!doesShow});
   }

   renderTableData() {
    return this.state.students.map((student, index) => {
       const { id, name, age, email } = student 
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{name}</td>
             <td>{age}</td>
             <td>{email}</td>
          </tr>
       )
    })
 }

    renderTableHeader=()=> {
    let header = Object.keys(this.state.students[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }

    
   
    render(){
      return(
        <div>
        <h1 id='title'>React Dynamic Table</h1>
        <table id='students'>
           <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderTableData()}
           </tbody>
        </table>
        
        <Link to='AddPage'>
        <button onclick={this.OnClickAdd} className='button_background ' style={{ margin: '20px auto',
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', cursor: 'pointer'
        }}
         >
         ADD  
        </button>
        </Link>

     </div>
        
      );
    }
  }