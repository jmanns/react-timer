const React = require('react');
const {Link, IndexLink} = require('react-router');

const Nav = () => {
  return(
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Timer App</li>
          <li>
            <IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
          </li>
          <li>
            <Link to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
            <li className="menu-text">
              Created By <a href="http://www.github.com/jmanns" target="_blank">Jason Manns</a>
            </li>
        </ul>
      </div>
    </div>
  );
};

module.exports= Nav;
