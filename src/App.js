import './App.css';
import SplashScreen from './component/SplashScreen';
import About from './component/About'
import Projects from './component/Projects'
import Skills from './component/Skills'
import WorkExperience from './component/WorkExperience'
import Contact from './component/Contact'
import {Route , Routes, BrowserRouter} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/portfolio/" element={<SplashScreen />} />
        <Route path="/portfolio/about" element={<About />} />
        <Route path="/portfolio/projects" element={<Projects />} />
         <Route path="/portfolio/skills" element={<Skills />} />
         <Route path="/portfolio/workexperience" element={<WorkExperience />} />
         <Route path="/portfolio/contact" element={<Contact />} />
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
