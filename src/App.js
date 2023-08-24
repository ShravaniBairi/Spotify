import './App.css';
import Navbar from "./components/Navbar/Navbar"
import HeroComponent from "./components/HeroComponent/HeroComponent"

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroComponent />
      <h1>My spotify</h1>
    </div>
  );
}

export default App;
