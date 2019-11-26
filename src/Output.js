import React, {Component} from 'react';
import Input from './Input';

export default class Output extends React.Component{
   state={
       input:'prashanth',
       data:'ravu'
   }

   AddFunc = (e) => {
       return(
    <h2>{this.state.input}</h2>
       )}

    render(){
        return(
           <div>
           { <input id="age" value={this.state.input} onChange={(e)=>{
                    let {input}=this.state;
                    input=e.target.value;
                    this.setState({input});
                  }}/>}
    
    
    <Input data={this.data} />
    
    <button onClick={this.AddFunc}>Add</button>
      
      

        
        </div>)

    }

}