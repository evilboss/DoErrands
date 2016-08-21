import React from 'react';

class ErrandView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="errand-view" className="container">
        <h4>List of item/s:</h4>
        <ul>
          <li>fish</li>
          <li>fish</li>
        </ul>
        <div className="service-charge">
          <h4>Service Charge Budget</h4>
          <p>PHP 234.00</p>
        </div>
        <div className="task-note">
          <h4>Task Note</h4>
          <p>Lorem ipsum</p>
        </div>
        <button className="btn btn-lg primary btn-block">
          Accept Errand Task
        </button>
      </section>
    );
  }
}

export default ErrandView;
