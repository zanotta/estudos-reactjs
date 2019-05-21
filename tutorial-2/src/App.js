import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {

	/*constructor(props){
		super(props);
		this.state = {
			squares: Array(9).fill(null),
			xIsNext: true,
		};
	}*/

	constructor(props) {
		super(props);

		this.state = {
			pessoas: []
		}

	}


	removePessoa = index => {

		const { pessoas } = this.state

		//Cria uma nova array com todos os valores, menos o índice enviado como parâmetro
		this.setState({
			pessoas: pessoas.filter((pessoa, i) => {
				return i !== index
			}),
		})

	}


	handleSubmit = pessoa => {
		this.setState({ pessoas: [...this.state.pessoas, pessoa] })
	}

	render() {

		return (
			<div className="container">
				<Table objetosData={this.state.pessoas} removePessoa={this.removePessoa} />
				<Form handleSubmit={this.handleSubmit} />
			</div>
		)
	}
}

export default App