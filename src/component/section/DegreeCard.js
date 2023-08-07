
function DegreeCard(props) {
    return (
        
        <div className="degree-card d-flex p-4 mx-5 my-2">
<div className="logo-holder">
<img
  src={props.logo}
  alt="Katihar Engineering College"
  className="educationlogo" 
/></div>
  <div className="body-side">
        <div 
          className="body-header"
          style={{ backgroundColor: "rgba(14, 107, 168, 0.467)" }}
        >
          <div className="body-header-title">
            <h2 className="card-title" style={{ color: "rgb(0, 28, 85)" }}>
              {props.collegeName}
            </h2>
            <h3 className="card-subtitle" style={{ color: "rgb(0, 28, 85)" }}>
             {props.degreeName}
            </h3>
          </div>
          <div className="body-header-duration">
            <h3 className="duration" style={{ color: "rgb(0, 28, 85)" }}>
              {props.session}
            </h3>
          </div>
        </div>
        <div className="body-content">
          <p className="content-list" style={{ color: "rgb(0, 28, 85)" }}>
           {props.line1}
          </p>
          <p className="content-list" style={{ color: "rgb(0, 28, 85)" }}>
          {props.line2}
          </p>
          <p className="content-list" style={{ color: "rgb(0, 28, 85)" }}>
          {props.line3}
          </p>
          <a href={props.collegeSite} target="_blank" rel="noopener noreferrer">
            <div
              className="visit-btn"
            >
              <p className="btn btn-primary bg-primary">
                Visit Website
              </p>
            </div>
          </a>
        </div>
        </div>
      </div>
      
    
     );
  }
  
  export default DegreeCard;
  