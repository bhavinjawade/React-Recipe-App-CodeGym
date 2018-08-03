import {
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_FAIL,
  SET_POKEMONS,
  FILTER_POKEMONS
} from '../constants/page'

function setPokemons(data) {
  //console.log(data)
  data.forEach(element => {
    console.log(element.ingredients)
    return element
  })
  // Set pokemon, uses the data to create a pokemon object that has the id of the pokemon,name,and url
  return {
    type: SET_POKEMONS,
    payload: data
  }
}

//getPokemons, gets all the pokemons
export function getPokemons() {
  return dispatch => {
    dispatch({
      type: GET_POKEMONS_REQUEST
    })

    //return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10`)
    return fetch(`http://49eaab7b.ngrok.io/ReactApp_API/ArrestDB/allrecipes`, {
      mode: 'cors'
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        }

        throw new Error(`${response.status}: ${response.statusText}`)
      })
      .then(data => {
        dispatch({
          type: GET_POKEMONS_SUCCESS
        })
        dispatch(setPokemons(data))
        dispatch(filterPokemons())
      })
      .catch(error => {
        dispatch({
          type: GET_POKEMONS_FAIL,
          payload: error.message
        })
      })
  }
}

export function filterPokemons(searchString = '') {
  return (dispatch, getState) => {
    const displayedPokemons = getState().page.pokemons.filter(pokemon => {
      console.log(pokemon.title);
      console.log(searchString.toLowerCase());
      return pokemon.title.includes(searchString)
    })

    dispatch({
      type: FILTER_POKEMONS,
      payload: displayedPokemons
    })
  }
}
