import logo from './logo.svg';
import './App.css';
import LoadingPage from './LoadingPage';
import { Router } from "@reach/router";

function App() {
  return (
    <Router className="App">
      <LoadingPage/>
    </Router>
  );
}

export default App;
