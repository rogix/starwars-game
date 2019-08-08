import React, { Component } from 'react';
import { toast } from 'react-toastify';

import GameInfo from './Board';
import api from '../services/api';

class Main extends Component {
  state = {
    loading: true,
    planet: {},
  };

  componentDidMount() {
    this.handleGetPlanet();
  }

  handleGetPlanet = async () => {
    const randonPlanet = Math.round(Math.random() * (61 - 1) + 1);

    try {
      const {
        data: { name, population, climate, terrain, films },
      } = await api.get(`/planets/${randonPlanet}/`);

      this.setState({
        planet: {
          name,
          population,
          climate,
          terrain,
          filmsTotal: films.length,
        },
        loading: false,
      });
    } catch (error) {
      toast.error(
        'Sorry, something went wrong. Please, reload the page to try again...'
      );
    }
  };

  render() {
    const { planet, loading } = this.state;

    return (
      <div className="main-container">
        <div className="game-container">
          <div className="planet-name">
            <h2>{planet.name}</h2>
          </div>

          {!loading ? <GameInfo {...planet} /> : <h1>Loading...</h1>}

          <div className="game-footer">
            <button type="button" onClick={this.handleGetPlanet}>
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
