import React from 'react';
import { Router, Route,Redirect} from 'react-router';
import { history } from 'react-router/lib/HashHistory';

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
		<Route component={Nav} >
        <Redirect from="/" to="shu" />
		    <Route  path="shu" component={HeroCards} url="shu.json" />
        <Route  path="wei" component={HeroCards} url="wei.json"/>
        <Route  path="wu" component={HeroCards} url="wu.json"/>
        <Route  path="neutral" component={HeroCards} url="neutral.json"/>
		</Route>
	</Router>
), document.body);

// React.render(<HeroCards />, document.getElementById('react'));
