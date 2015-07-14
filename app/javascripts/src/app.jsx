import React from 'react';
import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';

import HeroCards from './cards';
import Nav from './nav';

/*$.ajax({
  type: 'PATCH',
  url: 'https://yiltk.firebaseio.com/shu/1.json',
  data: JSON.stringify({"name":"ZHOU"}),
  success: function(data) {
    console.log("Friend added!", data); //the new item is returned with an ID
  }
});*/


// declare our routes and their hierarchy


React.render((
	 <Router history={history}>
		<Route path="/" component={Nav}>
		    <Route  path="shu" component={HeroCards}/>
		</Route>
	</Router>
), document.body);

// React.render(<HeroCards />, document.getElementById('react'));
