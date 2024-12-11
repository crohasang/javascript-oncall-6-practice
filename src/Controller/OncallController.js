import InputView from "../view/InputView.js";

class OnCallController {
  constructor() {
    this.inputView = new InputView();
  }

  async play() {
    await this.getInput();
  }

  async getInput() {
    await this.inputView.getStartMonthDayInput();
    await this.inputView.getWeekdayWorkerInput();
    await this.inputView.getWeekendWorkerInput();
  }
}

export default OnCallController;
