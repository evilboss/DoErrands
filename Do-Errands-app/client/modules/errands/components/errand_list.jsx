import React from 'react';

class ErrandList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header className="text-center">
          <div>
            <span className="pull-left menu glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
            <span className="header-text">
        Errands
          </span>
          </div>
          <div className="tab">
            <div className="active">List</div>
            <div><a href="/map">map</a></div>
          </div>
        </header>
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
      </div>
    );
  }
}

export default ErrandList;
