import React, { Component } from 'react'
import Pokemon from '../components/pokemon'
import Search from '../components/search'

var Alert = require('react-bootstrap').Alert
class Page extends Component {
  componentDidMount() {
    this.props.getPokemons()
  }

  handleSearch(event) {
    this.props.filterPokemons(event.currentTarget.value)
  }

  handleClick = () => {
    console.log('BRING UP', this)
    var slideup = this.refs.slideup
    slideup.style.top = 0 + '%'
  }

  handleimage = () => {
    var file = this.refs.imageupload.files[0]
    //console.log(file); //sames as here
    var reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      this.refs.base.value = reader.result
    }
  }

  handleDownSave = () => {
    var indi = this.refs.indi.value
    var quant = indi.replace(/ /g, '-')
    var indifinal = quant.replace(/(?:\r\n|\r|\n)/g, '|')
    console.log(indifinal)
    var details = {
      title: this.refs.title.value,
      descp: this.refs.descp.value,
      ingredients: indifinal,
      rating: this.refs.rating.value,
      thumbnail: this.refs.base.value,
      refid: '5'
    }
    var formBody = []
    for (var property in details) {
      var encodedKey = encodeURIComponent(property)
      var encodedValue = encodeURIComponent(details[property])
      formBody.push(encodedKey + '=' + encodedValue)
    }
    formBody = formBody.join('&')

    console.log('BRING DOWN', this)
    var slideup = this.refs.slideup
    fetch('http://127.0.0.1/ReactApp_API/ArrestDB/allrecipes/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body: formBody
    }).then(response => {
      if (response.ok) {
        console.log(response.code)
      }
    })
    window.location.reload()
  }

  handleDown = () => {
    var slideup = this.refs.slideup
    slideup.style.top = 100 + '%'
  }

  render() {
    let { displayedPokemons, isFetched, error } = this.props
    let pokemons = displayedPokemons.map(pokemon => {
      if (
        pokemon.title &&
        pokemon.title &&
        pokemon.thumbnail &&
        pokemon.ingredients
      ) {
        var indis = pokemon.ingredients.match(/\w+/g)
        var indilist = []
        var quantlist = []
        var indihtml = []
        for (var i = 0; i < indis.length; i = i + 2) {
          indihtml.push(
            <li className="indi-item" key={i}>
              {indis[i]}
              <span className="indi-quant">{indis[i + 1]}</span>
            </li>
          )
        }
        return (
          <div className="row">
            <div className="col-md-6 pokemons__item" key={pokemon.id}>
              <div className="card re-card">
                <div class="crop">
                  <img
                    className="card-img-top"
                    src={pokemon.thumbnail}
                    alt="Card image"
                    style={{ width: 100 + '%' }}
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">{pokemon.title}</h4>
                  <p className="card-text">{pokemon.descp}</p>
                  <div className="card-bottom">
                    <span className="rating">Rating: {pokemon.rating}</span>
                    <a href="#" className="edit-btn" style={{ color: 'grey' }}>
                      Edit
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="indi-box"
                style={{ width: 41 + '%', backgroundColor: `white` }}
              >
                <div className="indi-title">INGREDIENTS</div>
                <ul class="indi-list" type="none">
                  {indihtml}
                </ul>
                <span className="seemore">See More</span>
              </div>
            </div>
          </div>
        )
      }
    })

    return (
      <div className="page h-100">
        <div className="container-fluid h-100 p-0">
          {error && <div className="page__error">{error}</div>}
          <div className="page__search">
            <img
              className="menuicon"
              src="http://www.murfeld.gv.at/fileadmin/Template/Resources/Public/Custom/img/hamburger.png"
            />
            <Search onChange={this.handleSearch.bind(this)} />
          </div>
          {isFetched ? (
            <p>Loading...</p>
          ) : (
            <ul className="pokemons">{pokemons}</ul>
          )}
        </div>
        <div
          className="bottomnav"
          style={{
            width: 100 + '%',
            height: 55 + 'px',
            position: 'fixed',
            bottom: '0'
          }}
        >
          <button
            onClick={this.handleClick}
            className="p-0 addbtn btn btn-large"
          >
            <p className="p-0 m-0 plus">+</p>
          </button>
        </div>
        <div
          ref="slideup"
          className="newrecipe"
          style={{
            position: 'fixed',
            height: 100 + '%',
            width: 100 + '%',
            left: 0,
            backgroundColor: 'white'
          }}
        >
          <p className="slideup-title">Add Recipe</p>
          <form ref="main-form">
            <input
              required="required"
              ref="title"
              className="inputslide form-control input-lg"
              type="text"
              placeholder="Title"
            />
            <input
              required="required"
              ref="descp"
              style={{ height: 20 + '%' /*,borderRadius: 28+'px'*/ }}
              className="inputslide form-control input-lg"
              type="text"
              placeholder="Description"
            />
            <textarea
              required="required"
              ref="indi"
              style={{
                wordBreak: 'break-word',
                height: 34 + '%' /*,borderRadius: 28+'px'*/
              }}
              className="inputslide form-control input-lg"
              type="text"
              placeholder="Ingredient space quantity (new ingredient new line)"
            />
            <input
              required="required"
              ref="rating"
              className="inputslide form-control input-lg"
              type="text"
              placeholder="Rating"
            />
            <input
              ref="image"
              className="inputslide form-control input-lg"
              type="text"
              placeholder="Link to image"
            />
            <input
              ref="imageupload"
              onChange={this.handleimage}
              type="file"
              capture="camera"
              accept="image/*"
              id="cameraInput"
              name="cameraInput"
            />
            <input
              type="submit"
              value="Save"
              onClick={this.handleDownSave}
              className="btn btn-lg savebtn"
              style={{ left: 0 }}
            />
            <input ref="base" type="hidden" />
            <botton
              onClick={this.handleDown}
              className="btn btn-lg savebtn"
              style={{ right: 0, borderLeft: `solid 1px #ac433a` }}
            >
              Cancel
            </botton>
          </form>
        </div>
      </div>
    )
  }
}

export default Page
