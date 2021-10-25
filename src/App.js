import './styles/App.css';
import CheckList from './components/CheckList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">

      <Header />
      <CheckList className="CheckList" />
    </div>
  );
}

export default App;
