import React, { Component } from 'react'


const TableHeader = () => {
	return (
		<thead>
			<tr>
				<th>Nome</th>
				<th>Profissão</th>
			</tr>
		</thead>
	)
}

const TableBody = props => {

	const rows = props.objetosData.map((row, index) => {
		return (
			<tr key={index}>
				<td>{row.nome}</td>
				<td>{row.profissao}</td>
			</tr>
		)
	})

	return (
		<tbody>
			{rows}
		</tbody>
	)
}

class Table extends Component {

	render() {

		const { objetosData } = this.props

		return (
			<table>
				<TableHeader />
				<TableBody objetosData={objetosData} />
			</table>
		)
	}

}

export default Table