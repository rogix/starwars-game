import React from 'react';

function GameHeader({ name }) {
	return (
		<div className="planet-name">
			<h2>{name}</h2>
		</div>
	);
}

function GameFooter({ getPlanet }) {
	return (
		<div className="game-footer">
			<button type="button" onClick={getPlanet}>
				Next
			</button>
		</div>
	);
}

function GameContent({ population, climate, terrain, filmsTotal }) {
	return (
		<React.Fragment>
			<div className="planet-info">
				<span>
					<h3>Population</h3>
					<div className="line" />
					<p>{population}</p>
				</span>
				<span>
					<h3>Climate</h3>
					<div className="line" />
					<p>{climate}</p>
				</span>
				<span>
					<h3>Terrain</h3>
					<div className="line" />
					<p>{terrain}</p>
				</span>
				<p>
					Featured in <span>{filmsTotal}</span> films
				</p>
			</div>
		</React.Fragment>
	);
}

function GameContainer({ name, population, climate, terrain, filmsTotal, getPlanet }) {
	return (
		<div className="game-container">
			<GameHeader name={name} />
			<GameContent population={population} climate={climate} terrain={terrain} filmsTotal={filmsTotal} />
			<GameFooter getPlanet={getPlanet} />
		</div>
	);
}

export default GameContainer;
