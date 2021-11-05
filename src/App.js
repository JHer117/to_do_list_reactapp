import './styles/App.css';
import CheckList from './components/CheckList';
import Header from './components/Header';
import React from 'react';



class App extends React.Component {
  render(){
    return(

    <div className="App">
      <Header />
      <CheckList className="CheckList" />
    </div>
    )
  }
}

export default App;