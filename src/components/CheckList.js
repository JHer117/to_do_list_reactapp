import React, {Component} from "react";
import ToDoItem from "./ToDoItem";
import toDosData from "./ToDosData";



class CheckList extends Component{
    render(){
        const toDoComponent = toDosData.map(item => <ToDoItem key={item.id} item={item} />)
        return(
            <div className="CheckList container text-center">
            
                <div className="row">
                    <div className="col">
                    {toDoComponent}

                    </div>
                
                </div>

            </div>
        )
    }

}

export default CheckList