import React from 'react';
import { Link, RouteHandler } from 'react-router';

class Nav extends React.Component {
	render() {
		return(
			<div id="content-wrapper">
				<nav className="sidebar-wrapper">
					<div className="logo"><img src="assets/img/logo.png" /></div>
					<ul className="sidebar-nav">
						<li>
							<Link to="shu">
								<img src="assets/img/shu.png"/>
								<span>SHU</span>
							</Link>
						</li>
						<li>
							<Link to="wei">
								<img src="assets/img/wei.png"/>
								<span>WEI</span>
							</Link>
						</li>
						<li>
							<Link to="wu">
								<img src="assets/img/wu.png"/>
								<span>WU</span>
							</Link>
						</li>
						<li>
							<Link to="neutral">
								<img src="assets/img/neutral.png"/>
								<span>NEUTRAL</span>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		)
	}
}

export default Nav;