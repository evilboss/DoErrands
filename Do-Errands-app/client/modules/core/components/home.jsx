import React from 'react';

const Home = () => (
  <section id="login">
    <div className="container">
      <div className="text-center">
        <span className="glyphicon glyphicon-ok logo" aria-hidden="true"></span>
        <h2 className="text">DoErrands</h2>
      </div>
      <div>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Text input"/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Text input"/>
          </div>
          <button type="submit" className="btn primary btn-lg btn-block">Login</button>
        </form>
      </div>
    </div>
  </section>
);

export default Home;
