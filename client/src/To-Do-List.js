import React,{Component} from "react";
import axios from "axios";
import {Card, Header, Form, Input, Icon } from "semantic-ui-react";


let endpoint = "http://localhost:9000";

class ToDOList extends Component{

    constructor(props){

        super(props);
         
        this.state={
            task:"",
            items:[],
        };

    }
    ComponentDidMount(){
        this.getTask();
    }

    render(){
<div>
    <div className="row">
        <Header className="header" as ="h2" color="yellow">TO DO LIST</Header>

    </div>
    <div className="row">
        <form onSubmit={this.onSubmit}>
            <input 
            type="text"
            name="task"
            onChange={this.onChange}
            value={this.state.task}
            fluid
            placeholder="Create Task"
            />

        </form>
    </div>
</div>
    };
}

export default ToDOList;