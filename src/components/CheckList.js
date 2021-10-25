import React from "react";
import ToDoItem from "./ToDoItem";

function CheckList(){
    return(
        <div className="CheckList container text-center">
            
            <div className="row">
                <div className="col">
                    <ToDoItem />

                </div>
                
            </div>
            <div className="row">
                <div className="col">
                    <ToDoItem />
                        
                </div>
                
            </div>
            <div className="row">
                <div className="col">
                    <ToDoItem />
                    
                </div>
            </div>

        </div>
        
    )
}

export default CheckList