import './App.css';
import Header from "./components/Header/Header";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import Cloud from "./pages/Cloud"

function App() {
  return (
    <>
    <Router>
    <Header/>
    <Routes>
      <Route path="/" exact Component={Home}/>
      <Route path="/about" exact Component={About}/>
      <Route path="/cloud" exact Component={Cloud}/>
    </Routes>
    </Router>
    
    </>
  );
}

export default App;
