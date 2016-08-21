import React from 'react';

class ErrandList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="errand-list" className="container">

        {this.props.errandList.map(errand => (
            <div className="media" key={errand._id}>
              <div className="media-left">
                <a href="/errand/view">
                  <div className="img-wrapper">
                    <img className="media-object" src="..." alt="..."/>
                  </div>
                </a>
              </div>
              <div className="media-body">
                <h4 className="media-heading">{errand.title}</h4>
                Php 243.00<br/>
                Bluroon
              </div>
            </div>
          )
        )
        }
      </section>
    );
  }
}

export default ErrandList;
