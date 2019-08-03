import React from 'react';
import ReactDOM from 'react-dom';
// Step 1. Import react-router functions
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};

const About = () => {
	return(
		<div>
			<h1>This is my about component!</h1>
		</div>
		);
}

const Login = () => {
	return(
		<div>
			<form>
				<h1>Login </h1>
				<input type="text" name="username" placeholder="Username" />
				<label htmlFor="username">Username</label>
				<input type="password" name="password" plaseholder="Password" />
				<label htmlFor="password">Password</label>
				<input type="submit" value="Login" />
			</form>
		</div>
		);
}

//Add basic styling for NavLinks
const link = {
	width: '100px',
	padding: '12px',
	margin: '0 6px 6px',
	background: 'blue',
	textDecoration: 'none',
	color: 'white',
}

//add the navbar component

const Navbar = () => 
	<div>
		<NavLink
			to='/'
			exact
			style={link}
			activeStyle={{
				background: 'darkblue'
			}}
		>Home</NavLink>
		<NavLink
			to='/about'
			exact
			style={link}
			activeStyle={{
				background: 'darkblue'
			}}
		>About</NavLink>

		<NavLink
			to='/login'
			exact
			style={link}
			activeStyle={{
				background: 'darkblue'
			}}
		>Login</NavLink>
	</div>

//Step 2. Changed to have router coordinate what is displayed
ReactDOM.render(
	<Router>
		<React.Fragment>
			<Navbar />
			<Route exact path='/' render={Home} />
			<Route exact path='/login' render={Login} />
			<Route exact path='/about' render={About} />
		</React.Fragment>
   	</Router>,
  document.getElementById('root')
);
