import React from 'react';
import { Router, Route,Redirect} from 'react-router';
import { history } from 'react-router/lib/HashHistory';

import CardList from './CardList';
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
		<Route component={Nav} >
        <Redirect from="/" to="shu" />
		    <Route  path="shu" component={CardList} />
        <Route  path="wei" component={CardList} />
        <Route  path="wu" component={CardList} />
        <Route  path="neutral" component={CardList} />
		</Route>
	</Router>
), document.body);

// React.render(<HeroCards />, document.getElementById('react'));
