import logo from './logo.svg';
import './App.css';
import Ejemplo1 from './hooks/Ejemplo1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Exemples of hooks uses */}
        <Ejemplo1></Ejemplo1>
      </header>
    </div>
  );
}

export default App;
