import logo from './logo.svg';
import './App.css';
import Greetings from './components/pure/greetings';
import GreetingsF from './components/pure/greetingsF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {/*<Greetings name="Txell"></Greetings>*/}
          <GreetingsF name="Txell"></GreetingsF>

      </header>
    </div>
  );
}

export default App;
