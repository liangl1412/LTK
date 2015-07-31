import React from 'react';
import $ from 'jquery';
import Card from './Card';

class CardList extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    	data:[],
	    	inGame:[],
	    	showInGame:false
	    };

	 }
	loadCommentsFromServer(url) {
			$.ajax({

		      url: 'https://yiltk.firebaseio.com/'+url +".json",
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
	    this.loadCommentsFromServer(this.props.route.path);
	    
  	}
  	componentWillReceiveProps(nextProps){ 
  		this.loadCommentsFromServer(nextProps.route.path);
  		this.setState({showInGame: false});
  		this.setState({inGame: []});
  	}


  	
  	addToGame(card){
  		var inGame = this.state.inGame;
  		if(card.inGame) {
			var index = $.inArray(card, inGame);
			inGame.splice(index, 1);
			card.inGame = false;
			this.setState({
				inGame: inGame
			});
			
		}
		else {
			card.inGame = true;
			inGame.push(card);
			this.setState({
				inGame: inGame
			});
		}
	}
	showInGame() {
		this.setState({showInGame: true});
	}
	showAll() {
		this.setState({showInGame: false});
	}

	

  	render() {
  		
  		var showHero;
  		var classAll;
  		var classInGame;
  		if(this.state.showInGame) {
  			showHero = this.state.inGame.map((card) => {
				return <Card card={card} addToGame={this.addToGame.bind(this,card)}/>
			})
			classInGame = "active"
  		}
  		else {
  			showHero = this.state.data.map((card) => {
				return <Card card={card} addToGame={this.addToGame.bind(this,card)}/>
			})
			classAll = "active"
  		}
	    return (
	    	<main className="view-wrapper">
	    		<nav className="fix-header">
					<span onClick={this.showAll.bind(this)} className={classAll}>All</span>
					<span onClick={this.showInGame.bind(this)} className={classInGame}>In Play</span>
				</nav>
				<div className="main-content">
					<section className="row">
						{showHero}
					</section>
				</div>
			</main>
			
	    );
	}
	
}

export default CardList