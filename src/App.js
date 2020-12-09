import logo from './logo.svg';
import './App.css';
import 'firebase/storage';
import Login from './login.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
      </header>
    </div>
  );
}

export default App;
