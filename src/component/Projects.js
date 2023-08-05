import Header from "./section/header";
import Fade from 'react-reveal/Fade';
function ProjectsScreen() {
    return (
      <div className="ProjectsScreen">
    <Fade down>
      <Header  active="projects"/>
      </Fade>
      </div>
    );
  }
  
  export default ProjectsScreen;
  