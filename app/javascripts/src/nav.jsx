import React from 'react';
import { Link, RouteHandler } from 'react-router';

class Nav extends React.Component {
	render() {
		return(
			<div id="content-wrapper">
				<nav className="sidebar-wrapper">
					<Link to="/"><div className="logo"><img src="assets/img/logo.png" /></div></Link>
					<ul className="sidebar-nav">
						<li>
							<Link to="/shu" className="nav-item" >
								<img src="assets/img/shu.png"/>
								<span>SHU</span>
							</Link>
						</li>
						<li>
							<Link to="/wei" className="nav-item">
								<img src="assets/img/wei.png"/>
								<span>WEI</span>
							</Link>
						</li>
						<li>
							<Link to="/wu" className="nav-item">
								<img src="assets/img/wu.png"/>
								<span>WU</span>
							</Link>
						</li>
						<li>
							<Link to="/neutral" className="nav-item">
								<img src="assets/img/neutral.png"/>
								<span>NEUTRAL</span>
							</Link>
						</li>
					</ul>
				</nav>
				{this.props.children}
			</div>
		)
	}
}

export default Nav;