import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import ButtonHeader from './Components/ButtonHeader';
import Tabs from './Components/Tabs';


function App() {
  return (
    <div className="App">
      <Header/>
      <Tabs/>
      <ButtonHeader/>
    </div>
  );
}

export default App;
