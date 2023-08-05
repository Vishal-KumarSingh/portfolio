
function Header(props) {
    return (
      <div className="Header"> 
          <div className="headerbar" style={{height: "15vh" , padding: "5vh"}}>
          <nav className="navbar navbar-expand-lg navbar-light">
  <a className="navbar-brand" href="#">Vishal Kumar Singh</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto" style={{justifyContent: "flex-end" , width: "100%"}}>
      <li className="nav-item active">
        <a className="nav-link" href="./">Home <span className="sr-only">(current)</span></a>
      </li>
     
      <li className={ props.active == "about"?"nav-item active highlight":"nav-item active "}>
        <a className="nav-link" href="./about">About</a>
      </li>
      <li className={ props.active == "skill"?"nav-item active highlight":"nav-item active "}>
        <a className="nav-link" href="./skills">Skill <span className="sr-only">(current)</span></a>
      </li>
      <li className={ props.active == "workexperience"?"nav-item active highlight":"nav-item active "}>
        <a className="nav-link" href="./workexperience">Work Experience</a>
      </li>
      <li className={ props.active == "projects"?"nav-item active highlight":"nav-item active "}>
        <a className="nav-link" href="./projects">Projects <span className="sr-only">(current)</span></a>
      </li>
      <li className={ props.active == "contact"?"nav-item active highlight":"nav-item active "}>
        <a className="nav-link" href="./contact">Contact</a>
      </li>

    </ul>
 
  </div>
</nav>
          </div>
      </div>
    );
  }
  
  export default Header;
  