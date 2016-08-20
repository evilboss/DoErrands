import React from 'react';

class CreateErrand extends React.Component {
  constructor(props) {
    super(props);

  }

  onSubmitPost(e) {
    e.preventDefault();
    let title = this.refs.errandTitle.value;
    let createdAt = new Date();
    console.log(title);
    this.props.errands.insert({title: title, createdAt: createdAt})
  }


  render() {
    return (
      <section id="create-errand" onSubmit={this.onSubmitPost.bind(this)}>
        <form>
          <input type="text" ref="errandTitle"/>
          <button type="submit">Post</button>
        </form>
      </section>
    );
  }
}

export default CreateErrand;
