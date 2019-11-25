import React, {Component} from 'react';
import Products from './Products';

class AddPage extends React.Component{
   constructor(){
       super();
   this.state={
    students: [
        { id:'' , name: '', age: '', email: '' },
        
    ]
}

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

     AddHandler=()=>{
        var product = {
            
            name: "",
            price: "",
            category: "",
            qty: 0
          }
        this.state.students.push(product);
        this.setState(this.state.students);

         
     }

    render(){
    return(
        <div>
        <table id='students'>
        <tbody>
           <tr>{this.renderTableHeader()}</tr>
           {this.renderTableData()}
        </tbody>
     </table>

     <button onclick={this.AddHandler} className='button_background ' style={{ margin: '20px auto',
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', cursor: 'pointer'
        }}
         >
         ADDRow  
        </button>

</div>
    );
}
}

export default AddPage;



class ProductRow extends React.Component {
  
    render() {
  
      return (
        <tr className="eachRow">
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            "type": "name",
            value: this.props.product.name,
            id: this.props.product.id
          }}/>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "price",
            value: this.props.product.price,
            id: this.props.product.id
          }}/>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "qty",
            value: this.props.product.qty,
            id: this.props.product.id
          }}/>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "category",
            value: this.props.product.category,
            id: this.props.product.id
          }}/>
         
        </tr>
      );
  
    }
  
  }
  class EditableCell extends React.Component {
  
    render() {
      return (
        <td>
          <input type='text' name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onProductTableUpdate}/>
        </td>
      );
  
    }
  
  }