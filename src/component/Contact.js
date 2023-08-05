import Header from "./section/header";
import Fade from 'react-reveal/Fade';
function ContactScreen() {
    return (
      <div className="ContactScreen">
             <Fade down>
      <Header  active="contact"/>
      </Fade>
      </div> 
    );
  }
  
  export default ContactScreen;
  