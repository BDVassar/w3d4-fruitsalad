import { appState } from "../AppState.js"
import { Player } from "../Models/Player.js"
import { saveState } from "../Utils/Store.js"


class PlayerService {


  createPlayer(playerData) {
    console.log(playerData)
    const newPlayer = new Player(playerData)
    appState.players = [...appState.players, newPlayer]
    appState.activePlayer = newPlayer
    saveState('players', appState.players)
  }


  setActivePlayer(id) {
    const foundPlayer = appState.players.find(player => player.id == id)
    appState.activePlayer = foundPlayer
  }

  set

}

export const playersService = new PlayerService()