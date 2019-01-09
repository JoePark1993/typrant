import React from 'react';

class NavDropdown extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isToggleOn: false
      };
    }
    showDropdown(e) {
        e.preventDefault();
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }
    render() {
      const classDropdownMenu = 'dropdown-menu' + (this.state.isToggleOn ? ' show' : '')
      return (
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            {this.props.name}
          </a>
          <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
            {this.props.children}
          </div>
        </li>
      )
    }
  }

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Typrant</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Play/Play">Play</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Login/Login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Register</a>
            </li>
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                User
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">Settings</a>
                <a className="dropdown-item" href="/">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">Something else here</a>
              </div>
            </li> */}
           <NavDropdown name="*username*">
            <a className="dropdown-item" href="/">Action</a>
            <a className="dropdown-item" href="/">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="/">Something else here</a>
            </NavDropdown> 
          </ul>
          {/* <form className="form-inline my-3 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn b tn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
        </div>
      </nav>
    )
  }
}



export default Navigation;