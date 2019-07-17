import React, { Component } from 'react';

import GameContainer from './Board';
import api from '../services/api';

class Main extends Component {
	state = {
		planets: []
	};

	componentDidMount() {
		this.getPlanet();
	}

	getPlanet = async e => {
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
				planets: [data]
			});

			console.log(data.name);
		} catch (error) {
			console.log('error', error);
		}
	};

	render() {
		const { planets } = this.state;

		return (
			<div className="main-container">
				{planets.map(planet => {
					return <GameContainer key={planet.name} {...planet} getPlanet={this.getPlanet} />;
				})}
			</div>
		);
	}
}

export default Main;
