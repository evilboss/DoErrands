import React from 'react';


const Layout = ({header = () => null, content = () => null}) => (
  <div id="body-wrapper">
    {header()}

      {content()}
  </div>
);

export default Layout;
