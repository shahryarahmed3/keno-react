import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import ButtonHeader from './Components/ButtonHeader';
import Tabs from './Components/Tabs';
import ButtonContainer from './Components/ButtonContainer';
import BottomContainer from './Components/BottomContainer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Tabs/>
      <ButtonHeader/>
      <ButtonContainer/>
      <BottomContainer/>
    </div>
  );
}

export default App;
