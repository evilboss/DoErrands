import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  openNav(e) {
    e.preventDefault();
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav(e) {
    e.preventDefault();
    document.getElementById("mySidenav").style.width = "0";
  }

  render() {
    let Style = {
      fontSize: '30px',
      cursor: 'pointer'
    };
    return (
      <header className="text-center">
        <span className="pull-left menu glyphicon glyphicon-menu-hamburger" aria-hidden="true"
              onClick={this.openNav.bind(this)}></span>
        <span className="header-text">
        Errands
          </span>

        <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav.bind(this)}>&times;</a>
          <a href="/errand/create">Create Errand</a>
          <a href="#">Profile</a>
          <a href="/">Logout</a>
        </div>
      </header>
    );
  }
}

export default Header;
