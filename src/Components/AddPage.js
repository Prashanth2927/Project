import React, { Component } from 'react';
import Products from './Products';


class AddPage extends React.Component {
   constructor() {
      super();
      this.state = {
         products: [],
         product: { id: '', name: '', price: '', units: '' }
      }

   }




   update(e) {
      let product = { id: this.a.value, name:this.b.value, price: this.c.value, units: this.d.value }
      this.setState({product: product})
   }



   renderTableData() {
      return (
         <tr >
            <td><input type="text"
               ref={(call_back) => { this.a = call_back }} onChange=
               {this.update.bind(this)} /> </td>
               <td><input type="text"
               ref={(call_back) => { this.b = call_back }} onChange=
               {this.update.bind(this)} /> </td>
               <td><input type="text"
               ref={(call_back) => { this.c = call_back }} onChange=
               {this.update.bind(this)} /> </td>
               <td><input type="text"
               ref={(call_back) => { this.d = call_back }} onChange=
               {this.update.bind(this)} /> </td>

         </tr>

      )

   }
   componentDidMount() {
      if (this.props.location.state !== undefined) {
         this.state.products = this.props.location.state.data;
         this.setState({ products: this.state.products })
      }
   }


   addRowHandler = () => {
      this.state.products.push(this.state.product)
      this.setState({ products: this.state.products });
      this.props.history.push('/', { data: this.state.products })
   }


   render() {
      console.log(this.props.history.state)
      return (
         <div>
            <table id='products'>
               <tbody>
                  <tr>
                     <th>ID</th>
                     <th>Name</th>
                     <th>PRICE</th>
                     <th>UNITS</th>
                  </tr>
                  {this.renderTableData()}
               </tbody>
            </table>

            <button className='button_background ' style={{
               margin: '20px auto',
               display: 'flex', alignItems: 'center',
               justifyContent: 'center', cursor: 'pointer'
            }}
               onClick={this.addRowHandler}
            >
               ADDRow
        </button>
         </div>
      );
   }
}

export default AddPage;
