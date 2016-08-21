import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(document).ready(function () {
      var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        isClosed = false;

      trigger.click(function () {
        hamburger_cross();
      });

      function hamburger_cross() {

        if (isClosed == true) {
          overlay.hide();
          trigger.removeClass('is-open');
          trigger.addClass('is-closed');
          isClosed = false;
        } else {
          overlay.show();
          trigger.removeClass('is-closed');
          trigger.addClass('is-open');
          isClosed = true;
        }
      }

      $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
      });
    });
  }

  render() {
    let Style = {
      fontSize: '30px',
      cursor: 'pointer'
    };
    return (
      <header className="text-center">
        <span className="pull-left menu glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
        <span className="header-text">
        Errands
          </span>
      </header>
    );
  }
}

export default Header;
