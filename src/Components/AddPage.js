import React, {Component} from 'react';
import Products from './Products';
import Output from './Output';


class AddPage extends React.Component{
   constructor(){
       super();
   this.state={
    products: [
        { id:'' , name: '', age: '', email: '' },
        
    ],
     sayings: "",
}

    }

    


    update(e){ 
      this.setState({ sayings: this.a.value}); 
     } 



    renderTableData() {
           return (
              <tr >
                 <td><input type="text" 
     ref={(call_back) => {this.a = call_back}} onChange =  
     {this.update.bind(this)}/> </td>
                 
              </tr>
              
           )
      
     }
    

    renderTableHeader=()=> {
        let header = Object.keys(this.state.products[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     } 

     addRowHandler=()=>{
       this.props.history.push('/',{data:this.state.sayings})
     }
     

    render(){
      console.log(this.props.history.state)
    return(
        <div>
        <table id='products'>
        <tbody>
           <tr>{this.renderTableHeader()}</tr>
           {this.renderTableData()}
        </tbody>
     </table>

     <button  className='button_background ' style={{ margin: '20px auto',
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', cursor: 'pointer'
        }}
        onClick={this.addRowHandler}
         >
         ADDRow  
        </button>

      <p>{this.state.sayings}</p>

</div>
    );
}
}

export default AddPage;
