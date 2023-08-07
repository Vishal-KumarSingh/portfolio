
function CertificateCard(props) {
    return (
        <div className=" cert-card" >
        <div className="content">
          <a
            href="https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <div className="content-overlay" /> */}
            <div
              className="cert-header"
            >
              <img
                className="logo_img"
                src="./nptel.png"
                alt="Stanford University"
              />
            </div>
            <div className="content-details">
              <h3 className="content-title" style={{ color: "rgb(237, 249, 254)" }}>
                Certificate
              </h3>
            </div>
          </a>
        </div>
        <div className="cert-body">
          <h2 className="cert-body-title" style={{ color: "rgb(0, 28, 85)" }}>
            Machine Learning
          </h2>
          <h3 className="cert-body-subtitle" style={{ color: "rgb(127, 141, 170)" }}>
            - Andrew Ng
          </h3>
        </div>
      </div>
      
     );
  }
  
  export default CertificateCard;
  