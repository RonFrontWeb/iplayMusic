import './App.css';
import LoadingPage from './LoadingPage';
import { Router } from "@reach/router";
import PrimaryMenubar from './PrimaryMenubar';
import SecondaryMenubar from './SecondaryMenubar';
import "./variables.css"

function App() {
  return (
    // <Router>
    
    // </Router>
    <>
    <LoadingPage/>
  <PrimaryMenubar/>
  <SecondaryMenubar/>
  </>
  );
}

export default App;

