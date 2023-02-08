import logo from './logo.svg';
import './App.css';
import Greetings from './components/pure/greetings';
import GreetingsF from './components/pure/greetingsF';
import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {/*Example Component*/}
          {/*<Greetings name="Txell"></Greetings>*/}

          {/* Functional Example Component*/}
          {/* <GreetingsF name="Txell"></GreetingsF> */}

          {/*List of tasks Component*/}
          <TaskListComponent></TaskListComponent>

      </header>
    </div>
  );
}

export default App;
