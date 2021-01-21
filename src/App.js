import './App.css';
import LoadingPage from './LoadingPage';
import { Router } from "@reach/router";
import PrimaryMenubar from './PrimaryMenubar';
import SecondaryMenubar from './SecondaryMenubar';
import "./variables.css"
import MainContent from './MainContent';
import WalkMenu from './WalkMenu';
import RoundButtonIcon from './RoundButtonIcon';
import FeaturedPage from './FeaturedPage';

function App() {
  return (
    // <Router>
    
    // </Router>
    <>
    {/* <LoadingPage/> */}
  <MainContent>
    <FeaturedPage/>
    <FeaturedPage/>
    <FeaturedPage/>
    <FeaturedPage/>
    <FeaturedPage/>
  </MainContent>
  <SecondaryMenubar/>
  <PrimaryMenubar/>
  {/* <WalkMenu/> */}
  {/* <RoundButtonIcon/> */}
  </>
  );
}

export default App;

