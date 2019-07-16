import React from 'react';

function GameHeader() {
	return (
		<div className="planet-name">
			<h2>Planet Name</h2>
		</div>
	);
}

function GameFooter() {
	return (
		<div className="game-footer">
			<button>Next</button>
		</div>
	);
}

function GameContent() {
	return (
		<React.Fragment>
			<GameHeader />
			<div className="planet-info">
				<span>
					<h3>Population</h3>
					<div className="line" />
					<p>30000</p>
				</span>
				<span>
					<h3>Climate</h3>
					<div className="line" />
					<p>arid</p>
				</span>
				<span>
					<h3>Terrain</h3>
					<div className="line" />
					<p>desert</p>
				</span>
				<p>
					Featured in <span>03</span> films
				</p>
			</div>
			<GameFooter />
		</React.Fragment>
	);
}

function GameContainer() {
	return (
		<div className="game-container">
			<GameContent />
		</div>
	);
}

export default GameContainer;
