import React, { Component } from 'react';

import GameContainer from './Board';
import api from '../services/api';

class Main extends Component {
	state = {
		id: 1,
		dataResults: []
	};

	async componentDidMount() {
		const { dataResults, id } = this.state;

		const response = await api.get(`/planets/:${id}`);

		// const data = {
		// 	name: response.data.results
		// };

		this.setState({
			dataResults: [response.data.results]
		});
	}

	render() {
		const { dataResults } = this.state;

		return (
			<div className="main-container">
				<GameContainer />

				{dataResults.map(result => {
					return console.log(result);
				})}
			</div>
		);
	}
}

export default Main;
