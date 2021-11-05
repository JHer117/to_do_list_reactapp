import React, {Component} from "react";




class ToDoItem extends Component{
    render(){
        let todostyle = {
            backgroundColor: "whitesmoke",
            border: "0px 1px 0px 1px"
        
        }

        return(
            <div>
                <input className="checkboxes" type="checkbox" checked={this.props.item.completed}/>
                <label> {this.props.item.text} </label>
                <hr style={todostyle} />

            </div>  
        )
    }
}

export default ToDoItem