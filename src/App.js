import OnCallController from "./controller/OncallController.js";

class App {
  #controller;

  constructor() {
    this.#controller = new OnCallController();
  }

  async run() {
    await this.#controller.play();
  }
}

export default App;
