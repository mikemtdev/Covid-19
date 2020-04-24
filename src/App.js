import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import './App.css';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Home from './Components/Home';
import Downloads from './Components/Downloads/Downloads';
import ContactUs from './Components/ContactUs/ContactUs';
import AboutUs from './Components/AboutUs/AboutUs';

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/report' component={Downloads} />
				<Route
					exact
					path='/contact_us'
					component={ContactUs}
				/>
				<Route exact path='/about_us' component={AboutUs} />
			</Switch>
			<Redirect to='/' />
			<Footer />
		</Router>
	);
}

export default App;
