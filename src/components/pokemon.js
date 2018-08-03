import React, { PureComponent } from 'react'

class Pokemon extends PureComponent {
  render() {
    const { pokemon } = this.props

    return (
      <div
        className="pokemon"
        style={{
          borderRadius: `20px`,
          padding: `3%`
        }}
      >
        <img
          className="pokemon__sprite"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            pokemon.id
          }.png`}
          style={{
            borderRadius: `40px`
          }}
        />
        <div className="ingredients">
          <ul>
            <li>START</li>
            <li>Ginger</li>
            <li>Pepper</li>
            <li>Salt</li>
            <li>Ginger</li>
            <li>Pepper</li>
            <li>Salt</li>
            <li>Ginger</li>
            <li>Pepper</li>
            <li>Salt</li>
            <li>Ginger</li>
            <li>LAST</li>
          </ul>
        </div>
        <p className="pokemon__name">{pokemon.name}</p>
      </div>
    )
  }
}

export default Pokemon
