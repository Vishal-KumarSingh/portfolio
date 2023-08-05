
function SplashScreen() {
  setTimeout(function(){
        window.location.href="./about";
  } , 1500);
  return (
    <div className="SplashScreen">
        <div className="splashscreentext">
             <span className="splashscreenname">Vishal Kumar Singh </span>
        </div>
    </div>
  );
}

export default SplashScreen;
