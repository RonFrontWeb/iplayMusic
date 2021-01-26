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
import CategoryButton from './CategoryButton';
import PlayListElement from './PlayListElement';
import PlayListPage from './PlayListPage';
import Playlist from './pages/Playlist';
import Featured from './pages/Featured';
import Category from './pages/Category';
import PlayerElement from './PlayerElement';


function App() {
  return (
    <>
    <MainContent>
    <PlayerElement/>

    </MainContent>
    <Router>
    <Playlist path="/playlists"/>
    <Featured path="/featured"/>
    <Category path="/category"/>
    </Router>
      <SecondaryMenubar/>
      <PrimaryMenubar/>

    {/* <PlayListPage>
      <PlayListElement></PlayListElement>
      <PlayListElement></PlayListElement>
      <PlayListElement></PlayListElement>
      <PlayListElement></PlayListElement>
      <PlayListElement></PlayListElement>
      <PlayListElement></PlayListElement>
      <PlayListElement></PlayListElement>
    </PlayListPage> */}
    {/* <PlayListElement/> */}
    {/* <LoadingPage/>
  <MainContent title="Featured">
    <FeaturedPage/>
    <FeaturedPage/>
    <FeaturedPage/>
    <FeaturedPage/>
    <FeaturedPage/>
  </MainContent>
  <SecondaryMenubar/>
  <PrimaryMenubar/>

  <MainContent title="Categories">
    <CategoryButton title="Alternative" text="PROP"/>
    <CategoryButton title="Blues"/>
    <CategoryButton title="Classical"/>
    <CategoryButton title="Country"/>
    <CategoryButton title="Dance"/>
    <CategoryButton title="Electronic"/>
    <CategoryButton title="Fitness &amp; workout"/>
    <CategoryButton title="Hip-Hop / Rap"/>
    <CategoryButton title="Industrail"/>
    
  </MainContent>
  <SecondaryMenubar/>
  <PrimaryMenubar/>
  <WalkMenu/>
  <RoundButtonIcon/> */}
  </>
  );
}

export default App;

