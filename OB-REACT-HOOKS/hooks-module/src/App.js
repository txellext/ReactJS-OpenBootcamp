import logo from './logo.svg';
import './App.css';
//import Example1 from './hooks/Example1';
import Example2 from './hooks/Example2';
import MyContextComponent from './hooks/Example3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Exemples of hooks uses */}
        {/*<Example1></Example1>*/}
        {/*<Example2></Example2>*/}
        <MyContextComponent></MyContextComponent>
      </header>
    </div>
  );
}

export default App;
