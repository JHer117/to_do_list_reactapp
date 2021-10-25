import React from "react";

let todostyle = {
    backgroundColor: "whitesmoke",
    border: "0px 1px 0px 1px"

}

const ToDoItem = () =>(
    <div>
        <input className="checkboxes" type="checkbox" />
        <label> -To Do Item</label>
        <hr style={todostyle} />

    </div>
)

export default ToDoItem