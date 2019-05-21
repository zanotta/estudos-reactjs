import React, { Component } from 'react'


class Form extends Component {

	constructor(props) {
		super(props)

		this.initialState = {
			nome: '',
			profissao: '',
		}

		this.state = this.initialState
	}


	handleChange = event => {
		const { name, value} = event.target

		this.setState({
			[name]: value,
		})
	}

	submitForm = () => {
		this.props.handleSubmit(this.state)
		this.setState(this.initialState)
	}


	render() {
		const { nome, profissao } = this.state;

		return (
			<form>
				<label>Nome</label>
				<input
					type="text"
					name="nome"
					value={nome}
					onChange={this.handleChange} />
				<label>Job</label>
				<input
					type="text"
					name="profissao"
					value={profissao}
					onChange={this.handleChange} />

				<input type="button" value="Submit" onClick={this.submitForm} />
			</form>
		);
	}

}

export default Form