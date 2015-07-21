import React from 'react';
import {Link} from 'react-router';
import { cloneElement } from 'react/addons';
var { CSSTransitionGroup } = React.addons;

class Nav extends React.Component {
	render() {
		var key = this.props.location.pathname;
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
		      	<CSSTransitionGroup component="div" transitionName="page-transition">
		          {cloneElement(this.props.children || <div/>, { key: key })}
		        </CSSTransitionGroup>
			</div>
		)
	}
}

export default Nav;