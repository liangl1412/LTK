import React from 'react';
import $ from 'jquery';
import HeroCard from './heroCard';

class HeroCards extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {data:[],url:this.props.route.url};

	 }
	loadCommentsFromServer(url) {

	    $.ajax({

	      url: 'https://yiltk.firebaseio.com/'+url,
	      dataType: 'json',
	      cache: true,
	      success: function(data) {
	      	data.sort(function(a, b){
   	 			return a.id - b.id;
			});
	        this.setState({data: data});
	        
	      }.bind(this)
	    });
	}
	componentWillMount() {
	    this.loadCommentsFromServer(this.props.route.url);
	    
  	}
  	componentWillReceiveProps(nextProps){ 
  		this.loadCommentsFromServer(nextProps.route.url);
  	}
  	

  	render() {

	    return (
	        <HeroCard data={this.state.data} />
	    );
	}
	
}

export default HeroCards