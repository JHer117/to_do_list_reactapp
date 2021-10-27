import React from "react";


let todostyle = {
    backgroundColor: "whitesmoke",
    border: "0px 1px 0px 1px"

}


const ToDoItem = (props) =>(
    
    <div>
        <input className="checkboxes" type="checkbox" checked={props.item.completed}/>
        <label> {props.item.text} </label>
        <hr style={todostyle} />

    </div>
)

export default ToDoItem