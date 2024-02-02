import './App.css';
import Body from './Components/Body';
import Exper from './Components/exper';
import Navbar from './Components/navbar';
import Skills from './Components/skills';
import Socialmedia from './Components/socialmedia';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Skills />
      <Exper />
      <Socialmedia />
    </div> 
    )
}

export default App;
