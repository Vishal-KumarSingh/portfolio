import Header from "./section/header";
import DegreeCard from "./section/DegreeCard";
import Graduationhat from "./section/svg/graduationhat";
import Fade from 'react-reveal/Fade';
import GraduationHat from "./section/svg/graduationhat";
import Footer from "./section/footer";
import CertificateCard from "./section/CertificateCard";

function Education() {
    return (
      <div className="SkillsScreen">
    <Fade down>
      <Header active="skill"/>
      </Fade>
      <div className="row">
      <Fade left> 
        <div className="col-md">
          {" "}
          <GraduationHat />
        </div>
        </Fade>
      <Fade right>
        <div className="col-md" style={{padding: "8%"}}>
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
       
      </div>







  <div className="p-4 m-5">


<Fade left>   <DegreeCard collegeName="Katihar Engineering College" degreeName="BTech in Computer Science and Engieering" session="2021-2024"
        
        line1 = "⚡I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc."
        line2 = "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development."
        line3 = "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics." 
         logo="./logo.png"
        collegeSite="http://keck.ac.in"
        /></Fade>

<Fade right> <DegreeCard collegeName="Government Polytechnic College Patna 7" degreeName="Diploma in Computer Science and Engineering" session="2018-2021"
        
        line1 = "⚡I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc."
        line2 = "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development."
        line3 = "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics." 
         logo="./gpp7.png"
        collegeSite="https://www.gpp7.org.in/"
        /></Fade>


<Fade left>      

<DegreeCard collegeName="Utkramit High School " degreeName="Matriculation" session="2017-18"
        
        line1 = "⚡I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc."
        line2 = "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development."
        line3 = "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics." 
         logo="./logo.png"
        collegeSite="http://keck.ac.in"
        /> </Fade>


      
      


  </div>
  <h1 className="d-flex justify-content-center"> Certifications ?  </h1>
<div className="certs-main" > 




<CertificateCard />

 <CertificateCard />
 
 <CertificateCard />
 
 
 
 
 </div>



  


      <Footer />
      </div>
    );
  }
  
  export default Education;
  