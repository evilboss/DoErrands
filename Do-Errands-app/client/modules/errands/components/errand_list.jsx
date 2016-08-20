import React from 'react';

class ErrandList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="errand-list">
        <ul>
          {this.props.errandList.map(errand => (
            <li key={errand._id}>
              {errand.title}
            </li>
          ))}

        </ul>
      </section>
    );
  }
}

export default ErrandList;
