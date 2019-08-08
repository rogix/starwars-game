import React from 'react';

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

function GameInfo({ population, climate, terrain, filmsTotal }) {
  return (
    <GameContent
      population={population}
      climate={climate}
      terrain={terrain}
      filmsTotal={filmsTotal}
    />
  );
}

export default GameInfo;
