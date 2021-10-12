import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom';

import UsersList from './components/UsersList';
import AddUser from './components/AddUser';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/new-user'>
					<AddUser />
				</Route>
				<Route path='/' exact>
					<UsersList />
				</Route>
				<Redirect to='/' />
			</Switch>
		</Router>
	);
}

export default App;
