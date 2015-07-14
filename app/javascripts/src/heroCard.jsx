import React from 'react';
class HeroCard extends React.Component {

	render() {
		var commentNodes = this.props.data.map((comment) => {
	      return (
	        // `key` is a React-specific concept and is not mandatory for the
	        // purpose of this tutorial. if you're curious, see more here:
	        // http://facebook.github.io/react/docs/multiple-components.html#dynamic-children

	        <div className="grid-12">
				<div className="card-box">
					<img src="assets/img/1.png" />
					<div className="card-info">
						<h3>{comment.name}</h3>
						{comment.skills.map(function(object, i){
					        return <p className="card-skills">
						        <span className="skill-title">{object.title}</span>
						        <span>{object.desc}</span>
					        </p>
					    })}
					</div>
				</div>
			</div>
	      )
	    });
		return (
			<section className="row">
				{commentNodes}
			</section>
		)
			
	}
}

export default HeroCard