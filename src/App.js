import './App.css';
import bgVideo from './images/bg.mp4';

import Home from './Home';
import SavedList from './SavedList';

import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import Poem from './Poem';

function App() {

	return (
    <div className="App">
		<Router>

		<video autoPlay muted loop id='bgVideo'>
        	<source src={bgVideo} type="video/mp4" />
    	    Your browser does not support video 😂.
	    </video>

		<Switch>

			<Route exact path='/'>
				<Home />
			</Route>
			<Route exact path='/saved'>
				<SavedList />
			</Route>
			<Route exact path='/poem/:author/:title'>
				<Poem />
			</Route>

		</Switch>

		</Router>
		
    </div>
	);
}

export default App;
