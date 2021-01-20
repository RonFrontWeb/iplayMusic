import './App.css';
import LoadingPage from './LoadingPage';
import { Router } from "@reach/router";
import PrimaryMenubar from './PrimaryMenubar';
import SecondaryMenubar from './SecondaryMenubar';
import "./variables.css"
import MainContent from './MainContent';

function App() {
  return (
    // <Router>
    
    // </Router>
    <>
  <SecondaryMenubar/>
    {/* <LoadingPage/> */}
  <PrimaryMenubar/>
  <MainContent/>
  </>
  );
}

export default App;

