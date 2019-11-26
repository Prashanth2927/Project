import React, {Component} from 'react';
import AddPage from './AddPage';

export default class  extends React.Component{
    constructor(){
        super();
this.state={
    data: { id:''  }
}    
    }

    getData2(){
        
        AddPage.getData(data => this.setState({data : data}))
    }
    

    render(){
        return(
        <p>{this.state.data}</p>

        )
    }
}