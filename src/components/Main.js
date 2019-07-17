import React, { Component } from 'react';

import GameContainer from './Board';
import api from '../services/api';

class Main extends Component {
	state = {
		loading: true,
		planets: []
	};

	componentDidMount() {
		this.getPlanet();
	}

	getPlanet = async () => {
		const randonPlanet = Math.round(Math.random() * (61 - 1) + 1);

		try {
			const response = await api.get(`/planets/${randonPlanet}/`);

			const data = {
				name: response.data.name,
				population: response.data.population,
				climate: response.data.climate,
				terrain: response.data.terrain,
				filmsTotal: response.data.films.length
			};

			this.setState({
				planets: [data],
				loading: false
			});
		} catch (error) {
			console.log('error', error);
		}
	};

	render() {
		const { planets, loading } = this.state;

		return (
			<div className="main-container">
				{!loading ? (
					planets.map(planet => {
						return <GameContainer key={planet.name} {...planet} getPlanet={this.getPlanet} />;
					})
				) : (
					<h1>Loading...</h1>
				)}
			</div>
		);
	}
}

export default Main;
