import { useNavigate } from "react-router-dom";

function SplashScreen() {
  const navigate = useNavigate();
  const navigateToAbout = () => {
    navigate('/about' , {replace: true});
  }
  
  setTimeout( navigateToAbout, 1500);
  return (
    <div className="SplashScreen">
        <div className="splashscreentext">
             <span className="splashscreenname">Vishal Kumar Singh </span>
        </div>
    </div>
  );
}

export default SplashScreen;
