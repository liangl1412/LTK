import React from 'react';

class HeroCard extends React.Component {

	render() {
		var commentNodes = this.props.data.map((comment) => {
		  var imgUrl = "assets/img/hero/" + comment.img + ".jpg";
	      return (
	        // `key` is a React-specific concept and is not mandatory for the
	        // purpose of this tutorial. if you're curious, see more here:
	        // http://facebook.github.io/react/docs/multiple-components.html#dynamic-children

	        <div className="grid-12">
				<div className="card-box">
					<img src={imgUrl} />
					<div className="card-info">
						<h3>{comment.name}</h3>
						{comment.skills.map(function(object, i){
					        return <p className="card-skills">
						        <span className="skill-title">{object.title}</span>
						        <span dangerouslySetInnerHTML = {{__html: object.desc}} />
					        </p>
					    })}
					</div>
				</div>
			</div>
	      )
	    });
		return (
			<main className="view-wrapper">
				<div className="main-content">
					<section className="row">
						{commentNodes}
					</section>
				</div>
			</main>
			
		)
			
	}
}

export default HeroCard