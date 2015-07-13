import React from 'react';
import $ from 'jquery';
import HeroCard from './heroCard';

class HeroCards extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {data:[]};
	 }
	loadCommentsFromServer() {
	    $.ajax({
	      url: 'https://yiltk.firebaseio.com/wei.json',
	      dataType: 'json',
	      cache: true,
	      data:'wu',
	      success: function(data) {
	        this.setState({data: data});
	        
	      }.bind(this)
	    });
	}
	componentDidMount() {
	    this.loadCommentsFromServer();
	    
  	}

  	render() {
	    return (
	        <HeroCard data={this.state.data} />
	    );
	}
	
}

export default HeroCards