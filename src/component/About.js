import Footer from "./section/footer";
import Header from "./section/header";
import CloudImage from "./section/svg/cloudImage";
import DataScienceImage from "./section/svg/datascience";
import FullStackImage from "./section/svg/fullstackImage";
import HeaderImage from "./section/svg/sittinonDesk";
import Fade from 'react-reveal/Fade';
function aboutScreen() {
  return (
    <div className="aboutScreen">
      <Fade down>
     
      <Header active="about"/>
      
      </Fade>
   
      <div className="row">
      <Fade left>
        <div className="col-md p-5 mt-1" >
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: "rgb(0, 28, 85)" }}>
               Vishal Kumar Singh
              </h1>
              <h2
                className="greeting-nickname"
                style={{ color: "rgb(0, 28, 85)" }}
              >
                ( @vksrajputt )
              </h2>
              <p
                className="greeting-text-p subTitle"
                style={{ color: "rgb(127, 141, 170)" }}
              >
                A passionate individual who always thrives to work on end to end
                products which develop sustainable and scalable social and
                technical systems to create impact.
              </p>
              <div className="social-media-div">
                <a
                  href="https://github.com/Vishal-KumarSingh"
                  className="icon-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span name="Github" className="sc-AxjAm fpASeU">
                    <i className="fab fa-github"></i>
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ashutosh1919/"
                  className="icon-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span name="LinkedIn" className="sc-AxjAm joVFIO">
                    <i className="fab fa-linkedin-in"></i>
                  </span>
                </a>
                <a
                  href="https://youtube.com/c/DevSense19"
                  className="icon-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span name="YouTube" className="sc-AxjAm ldpSjd">
                    <i className="fab fa-youtube"></i>
                  </span>
                </a>
                <a
                  href="mailto:ashutoshhathidara98@gmail.com"
                  className="icon-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span name="Gmail" className="sc-AxjAm koLpVp">
                    <i className="fab fa-google"></i>
                  </span>
                </a>
                <a
                  href="https://twitter.com/ashutosh_1919"
                  className="icon-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span name="Twitter" className="sc-AxjAm iwdcxA">
                    <i className="fab fa-twitter"></i>
                  </span>
                </a>
                <a
                  href="https://www.facebook.com/laymanbrother.19/"
                  className="icon-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span name="Facebook" className="sc-AxjAm fNVSvM">
                    <i className="fab fa-facebook-f"></i>
                  </span>
                </a>
                <a
                  href="https://www.instagram.com/layman_brother/"
                  className="icon-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span name="Instagram" className="sc-AxjAm cdEhib">
                    <i className="fab fa-instagram"></i>
                  </span>
                </a>
              </div>
              <div className="portfolio-repo-btn-div">
                <div className="portfolio-repo-btn">
                  <a
                    className="main-button"
                    href="https://github.com/Vishal-KumarSingh"
                    target="_blank"
                    style={{
                      color: "rgb(237, 249, 254)",
                      backgroundColor: "rgb(0, 28, 85)",
                      border: "1px solid rgb(0, 28, 85);",
                      padding: "10px"
                    }}
                  >
                    ⭐ Star Me On Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Fade>
        <Fade right> 
        <div className="col-md p-5 mt-1">
          {" "}
          <HeaderImage />
        </div>
        </Fade>
      </div>

    
     <h1 className="d-flex justify-content-center"> What I do ?  </h1>

      <div className="row">
      <Fade left>
        <div className="col-md p-5 mt-1">
          {" "}
          <DataScienceImage />
        </div>
       </Fade>
       <Fade right>
        <div className="col-md p-5 mt-1">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: "rgb(0, 28, 85)" }}>
               Data Science and Artificia Intelligence<br /><br />
              </h1>
              <h2
                className="greeting-nickname"
                style={{ color: "rgb(0, 28, 85)" }}
              >
                ( Tensorflow , SKlearn , Pytorch , Python )
              </h2>
              <p
                className="greeting-text-p subTitle"
                style={{ color: "rgb(127, 141, 170)" }}
              ><br />
             ⚡  Developing highly scalable production ready models for various deeplearning and statistical use cases <br />
             <br />
             ⚡ Experience of working with Computer Vision and NLP projects<br />
             <br />
             ⚡ Complex quantitative modelling for dynamic forecasting and time series analysis<br />
              </p>
              </div>

      </div>
     </div>
     </Fade>
     </div>








     <div className="row">
       
       <div className="col-md p-5 mt-1">
         <Fade left >
         <FullStackImage />
         </Fade>
       </div>
      
       <div className="col-md p-5 mt-1">
       <Fade right >
         <div className="greeting-text-div">
           <div>
             <h1 className="greeting-text" style={{ color: "rgb(0, 28, 85)" }}>
             Full  Stack Development <br /><br />
             </h1>
             <h2
               className="greeting-nickname"
               style={{ color: "rgb(0, 28, 85)" }}
             >
               ( MongoDb , ExpressJS , ReactJS , NodeJS )  <br />
               ( PHP , MySQL , Codeigniter , Bootstrap )  <br />
               ( Django , Python , PostGreSQL , Bootstrap )  <br />
               ( Spring MVC , Java , JSP)  <br />
             </h2>
             <p
               className="greeting-text-p subTitle"
               style={{ color: "rgb(127, 141, 170)" }}
             ><br />
            ⚡  Developing highly scalable production ready models for various deeplearning and statistical use cases <br />
            <br />
            ⚡ Experience of working with Computer Vision and NLP projects<br />
            <br />
            ⚡ Complex quantitative modelling for dynamic forecasting and time series analysis<br />
             </p>
         
             </div>

     </div>
     </Fade>
    </div>
   
    </div>





    
    <div className="row">
       
       <div className="col-md p-5 mt-1">
        <Fade left > 
         
         <CloudImage />
         </Fade>
       </div>

       <div className="col-md p-5 mt-1">
        <Fade right>
         <div className="greeting-text-div">
           <div>
             <h1 className="greeting-text" style={{ color: "rgb(0, 28, 85)" }}>
              Application Development <br /><br />
             </h1>
             <h2
               className="greeting-nickname"
               style={{ color: "rgb(0, 28, 85)" }}
             >
               ( Flutter , Dart , REST APIs)  <br />
               ( Android , Java , REST APIs)  <br />
               ( Tkinter , Python , REST APIs)  <br />
             </h2>
             <p
               className="greeting-text-p subTitle"
               style={{ color: "rgb(127, 141, 170)" }}
             ><br />
            ⚡  Developing highly scalable production ready models for various deeplearning and statistical use cases <br />
            <br />
            ⚡ Experience of working with Computer Vision and NLP projects<br />
            <br />
            ⚡ Complex quantitative modelling for dynamic forecasting and time series analysis<br />
             </p>
             </div>

     </div>
     </Fade>
    </div>

    </div>


   
   <Footer />
   
   
 
    </div>
  );
}

export default aboutScreen;
