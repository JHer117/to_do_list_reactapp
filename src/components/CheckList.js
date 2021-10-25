import React from "react";

function CheckList(){
    return(
        <div className="CheckList container text-center">
            
            <div className="row">
                <div className="col">
                    <input className="checkboxes" type="checkbox" />
                    <label> Item 1</label>

                </div>
                
            </div>
            <div className="row">
                <div className="col">
                    <input className="checkboxes" type="checkbox" />
                    <label> Item 2</label>
                </div>
                
            </div>
            <div className="row">
                <div className="col">
                    <input className="checkboxes" type="checkbox" />
                    <label> Item 3</label>
                    
                </div>
            </div>

        </div>
        
    )
}

export default CheckList