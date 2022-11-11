import { appState } from "../AppState.js"
import { playersService } from "../Services/PlayersService.js"
import { setHTML, setText } from "../Utils/Writer.js"
import { getFormData } from "../Utils/FormHandler.js"


function _drawPlayers() {
  let players = appState.players
  let template = ''
  players.forEach(player => template += player.PlayerTemplate)
  setHTML('scoreboard', template)
}

function _drawActivePlayers() {
  let activePlayer = appState.activePlayer
  setHTML('activePlayer', activePlayer.ActivePlayerTemplate)
}

function _drawFruit() {
  let fruits = appState.fruits
  let activeFruit = fruits[Math.floor(Math.random() * fruits.length)]
  setText('randomFruit', activeFruit)
}


export class PlayersController {

  constructor() {
    appState.on('activePlayer', _drawActivePlayers)
    appState.on('players', _drawPlayers)
    appState.on('activeFruit', _drawFruit)
    _drawPlayers()
    _drawFruit()

  }

  setActivePlayer(id) {
    playersService.setActivePlayer(id)
  }

  createPlayer() {
    window.event.preventDefault()
    const form = window.event.target
    let playerData = getFormData(form)
    playersService.createPlayer(playerData)
    // @ts-ignore
    form.reset()
  }

}