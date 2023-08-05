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
        <Route path="/" element={<SplashScreen />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
         <Route path="skills" element={<Skills />} />
         <Route path="workexperience" element={<WorkExperience />} />
         <Route path="contact" element={<Contact />} />
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
