import Header from "./section/header";
import Fade from 'react-reveal/Fade';
function SkillsScreen() {
    return (
      <div className="SkillsScreen">
    <Fade down>
      <Header active="skill"/>
      </Fade>
      </div>
    );
  }
  
  export default SkillsScreen;
  