import LoginForm from "LoginForm/LoginForm";
import Pager from "Pager/Pager";
import RadioButtons from "RadioButtons/RadioButtons";
import "./App.css";

const App = () => {
  return (
    <div>

      <div className="App-component">
        <header className="App-header">Login Form component</header>
        <div className="App-content">
          <LoginForm />
        </div>
      </div>

      <div className="App-component">
        <header className="App-header">Pager component</header>
        <div className="App-content">
          <Pager />
        </div>
      </div>

      <div className="App-component">
        <header className="App-header">Radio Buttons component</header>
        <div className="App-content">
          <RadioButtons />
        </div>
      </div>
      
    </div>
  );
};

export default App;
