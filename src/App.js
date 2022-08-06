import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/nav/Header';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Sahayproject from './components/projects/Sahayproject';
import Resume from './components/resume/Resume';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/projects' element={<Projects />}></Route>
        <Route exact path='/projects/sahayproject' element={<Sahayproject />}></Route>
        <Route exact path='/resume' element={<Resume />}></Route>
        </Routes>
      {/* <Home /> */}
      {/* <Projects /> */}
      {/* <Sahayproject /> */}
      {/* <Resume /> */}
    </div>
    </Router>
  );
}

export default App;
