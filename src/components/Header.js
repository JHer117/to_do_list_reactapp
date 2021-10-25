import React from "react";


const headerImg = {
    backgroundImage: `url("https://cdn.pixabay.com/photo/2014/04/02/10/24/checkmark-303752_1280.png")`, 
    backgroundPosition: "right", 
    backgroundRepeat: "no-repeat", 
    backgroundSize: "30%",

}


const Header = () =>(
    <div style={headerImg} className="jumbotron bg-dark">
        <h1 className="display-3">To Do List</h1>
        <p className="lead">Let's Get Stuff Done!</p>

    </div>
    )


export default Header