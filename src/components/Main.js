import React, { Component } from 'react';

import GameContainer from './Board';
import api from '../services/api';

class Main extends Component {
	state = {
		loading: true,
		planet: {}
	};

	componentDidMount() {
		this.getPlanet();
	}

	getPlanet = async () => {
		const randonPlanet = Math.round(Math.random() * (61 - 1) + 1);

		try {
			const { data: { name, population, climate, terrain, films } } = await api.get(`/planets/${randonPlanet}/`);

			this.setState({
				planet: {
					name,
					population,
					climate,
					terrain,
					filmsTotal: films.length
				},
				loading: false
			});
		} catch (error) {
			alert('Sorry, something went wrong. Please, reload the page to try again...', error);
		}
	};

	render() {
		const { planet, loading } = this.state;

		return (
			<div className="main-container">
				{!loading ? <GameContainer {...planet} getPlanet={this.getPlanet} /> : <h1>Loading...</h1>}
			</div>
		);
	}
}

export default Main;
