import React from 'react';

const Home = () => (
  <section id="login">
    <div className="container">
      <div className="text-center">
        <span className="glyphicon glyphicon-ok logo" aria-hidden="true"></span>
        <h2 className="text">Errands</h2>
      </div>
      <div>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Email Address"/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password"/>
          </div>
          <a href="/errand/list" className="login-btn btn primary btn-lg btn-block">Login</a>
        </form>
      </div>
    </div>
  </section>
);

export default Home;
