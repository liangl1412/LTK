import React from 'react';

class Card extends React.Component {

	render() {
		
		  var imgUrl = "assets/img/hero/" + this.props.card.img + ".jpg";
		  var active = "fa fa-star-o"
		  if(this.props.card.inGame) {
		  	active = "fa fa-star"
		  	
		  }
	      return (
	        <div className="grid-12" onClick={this.props.addToGame}>
				<div className="card-box cf">
					<img src={imgUrl} />
					<div className="card-info">
						<h3>{this.props.card.name}<i className={active}></i></h3>
						{this.props.card.skills.map(function(object, i){
					        return <p className="card-skills">
						        <span className="skill-title">{object.title}</span>
						        <span dangerouslySetInnerHTML = {{__html: object.desc}} />
					        </p>
					    })}
					    <span className="card-id">{this.props.card.id}</span>
					</div>
				</div>
			</div>
	      )
			
	}
}

export default Card