import { Link } from 'react-router-dom';
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
      <Link to="/" >
        <a className="nav-link">Home <span className="sr-only">(current)</span></a>
        </Link>
      </li>
     
      <li className={ props.active == "about"?"nav-item active highlight":"nav-item active "}>
      <Link to="/about" >
        <a className="nav-link">About</a>
        </Link>
      </li>
      <li className={ props.active == "skill"?"nav-item active highlight":"nav-item active "}>
      <Link to="/skills" >
        <a className="nav-link">Skill <span className="sr-only">(current)</span></a>
        </Link>
      </li>
      <li className={ props.active == "workexperience"?"nav-item active highlight":"nav-item active "}>
      <Link to="/workexperience" >
        <a className="nav-link">Work Experience</a>
        </Link>
      </li>
      <li className={ props.active == "projects"?"nav-item active highlight":"nav-item active "}>
      <Link to="/projects" >
        <a className="nav-link">Projects <span className="sr-only">(current)</span></a>
        </Link>
      </li>
      <li className={ props.active == "contact"?"nav-item active highlight":"nav-item active "}>
      <Link to="/contact" >
        <a className="nav-link">Contact</a>
        </Link>
      </li>

    </ul>
 
  </div>
</nav>
          </div>
      </div>
    );
  }
  
  export default Header;
  