import './styles/App.css';
// import CheckList from './components/CheckList';
import Header from './components/Header';
import toDosData from './components/ToDosData';
import ToDoItem from './components/ToDoItem';




function App(){

  const toDoComponent = toDosData.map(item => <ToDoItem key={item.id} item={item} />) 
    
  
  return(
    <div className="App">
      <Header />
      {/* <CheckList className="CheckList" /> */}
      {toDoComponent}

    </div>

  )

}
export default App;