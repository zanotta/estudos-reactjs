import React from 'react';
import './styles.css';
import Header from './Components/Header';
import Main from './Pages/Main';

class App extends React.Component {

	render(){
		return (
			<div className="App">
				<Header />
				<Main />
			</div>
		);
	}
	
}

export default App;
