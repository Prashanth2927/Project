import React, {Component} from 'react';
import './Products.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import AddPage from './AddPage';

export default class Products extends React.Component{
      constructor(props) {
      super(props) 
      this.state = { 
         products: [
            { id: 1, name: 'Wasif', price: 21, units: '30' },
            { id: 2, name: 'Wadsdsdsif', price: 21, units: '30' },
            { id: 3, name: 'Wasifds', price: 2111, units: '311' },
            { id: 4, name: 'Wasif', price: 21, units: '30' }
         ],
         
      }
  
   }

   OnClickAdd=()=>{
       const doesShow=this.state.showAddPage;
       this.setState({showAddPage:!doesShow});
   }

   renderTableData() {
    return this.state.products.map((product, index) => {
       const { id, name, price, units } = product 
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{name}</td>
             <td>{price}</td>
             <td>{units}</td>
          </tr>
       )
    })
 }

    renderTableHeader=()=> {
    let header = Object.keys(this.state.products[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }

    
   
    render(){
      return(
        <div>
        <h1 id='title'>React Dynamic Table</h1>
        <table id='products'>
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