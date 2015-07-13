import React from 'react';
import $ from 'jquery';
import HeroCard from './heroCard';

class HeroCards extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {data: 0};
	 }
	loadCommentsFromServer() {
	    $.ajax({
	      url: 'https://yiltk.firebaseio.com/.json',
	      dataType: 'json',
	      cache: true,
	      success: function(data) {
	        this.setState({data: data});
	        
	      }.bind(this)
	    });
	}
	componentDidMount() {
	    this.loadCommentsFromServer();
	    
  	}
	render() {
		console.log(this.state.data);
		return (
			<div className="grid-6">
				<div className="card-box">
					<img src="assets/img/1.png" />
					<div className="card-info">
						<h3>Zhen, Ji</h3>
						<p>Alpine forests of Pakistan are found at very high elevations in the 
							mountainous regions of Himalaya, Karakoram and Hidukush. 
							The timberline, or elevation limit of tree growth, is exceptionally 
							high in these mountains, rising..</p>
					</div>
				</div>
			</div>

		)
	}

}
export default HeroCards