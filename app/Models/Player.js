import { generateId } from "../Utils/generateId.js"


export class Player {
  constructor(data) {
    this.id = generateId(),
      this.name = data.name,
      this.score = 0
    this.highscore = 0
  }

  get PlayerTemplate() {
    return `
    <div class="col-12 col-md-6" onclick="app.playersController.setActivePlayer('${this.id}')">${this.name}</div>
    <div class="col-12 col-md-6">Highscore: ${this.highscore}</div>
    `
  }

  get ActivePlayerTemplate() {
    return `
    <div class="col-12 col-md-5 card p-5">
              <h1>${this.name}</h1>
              <h2>Score:${this.score}</h2>
            </div>
    `
  }




}



