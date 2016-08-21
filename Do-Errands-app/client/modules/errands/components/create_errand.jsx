import React from 'react';

class CreateErrand extends React.Component {
  constructor(props) {
    super(props);

  }

  onSubmitPost(e) {
    e.preventDefault();
    let title = this.refs.errandTitle.value;
    let serviceFee = this.refs.serviceFee.value;
    let createdAt = new Date();
    console.log(title);
    this.props.errands.insert({title: title, serviceFee: serviceFee, createdAt: createdAt})
    this.title = '';
    this.serviceFee = '';
  }


  render() {
    return (
      <section id="create-errand" onSubmit={this.onSubmitPost.bind(this)}>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" ref="errandTitle"/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" ref="serviceFee"/>
          </div>
          <button type="submit" className="btn primary btn-lg btn-block">Ask someone to do it now</button>
        </form>
      </section>
    );
  }
}

export default CreateErrand;
