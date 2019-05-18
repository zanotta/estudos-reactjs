import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
	render() {

		const objetos = [
			{
				nome: 'Charlie',
				profissao: 'Janitor',
			},
			{
				nome: 'Mac',
				profissao: 'Bouncer',
			},
			{
				nome: 'Dee',
				profissao: 'Aspring actress',
			},
			{
				nome: 'Dennis',
				profissao: 'Bartender',
			},
			{
				nome: 'Rodrigo',
				profissao: 'Programador',
			},
		]

		return (
			<div className="container">
				<Table objetosData={objetos} />
			</div>
		)
	}
}

export default App