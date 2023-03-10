import logo from './logo.svg';
import './App.css';
import Greetings from './components/pure/greetings';
import GreetingsF from './components/pure/greetingsF';
import TaskListComponent from './components/container/task_list';
import GreetingsStyled from './components/pure/greetingsStyled';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/*Example Component*/}
          {/*<Greetings name="Txell"></Greetings>*/}

          {/* Functional Example Component*/}
          {/* <GreetingsF name="Txell"></GreetingsF> */}

          {/*List of tasks Component*/}
          {/* <TaskListComponent></TaskListComponent> */}
          {/* <GreetingsStyled name="Dawa"></GreetingsStyled> */}
          {/**Gestión de eventos */}
          {/*<Father></Father>*/}
      {/* Exemples of conditional render */}
      {/* <OptionalRender></OptionalRender> */}
      {/* </header> */}
      {/**Ejemplo uso de formik y YUP */}
      {/* <LoginFormik></LoginFormik> */}
      {/* <RegisterFormik></RegisterFormik> */}
    </div>  
  );
}

export default App;
