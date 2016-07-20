import React from 'react'
import { Link, browserHistory } from 'react-router'

  var App = (props) => (
    <div className="row">
    <div className="jumbotron text-center">
    <h1>Welcome To The Robot Router App</h1>
    </div>
    <div className="header-links text-center">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/page1">Page1</Link></li>
        <li><Link to="/page2">Page2</Link></li>
        <li><Link to="/page3">Page3</Link></li>
      </ul>
      <hr />
    <div>{props.children}</div>
    </div>
    {/*<button className="btn btn-block btn-success" onClick={() => browserHistory.push('/')}>GoHome</button>*/}
  </div>)
  export default App
