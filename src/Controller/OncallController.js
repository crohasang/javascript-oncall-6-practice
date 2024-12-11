import ScheduleTable from "../models/ScheduleTable.js";
import InputView from "../views/InputView.js";

class OnCallController {
  #startMonth;

  #startDay;

  #weekdayWorkerArray;

  #weekendWorkerArray;

  #scheduleTable;

  constructor() {
    this.inputView = new InputView();
    this.#scheduleTable = [];
    this.#startMonth = null;
    this.#startDay = null;
    this.#weekdayWorkerArray = [];
    this.#weekendWorkerArray = [];
  }

  async play() {
    await this.getInput();

    this.createScheduleTable();
  }

  async getInput() {
    const [month, day] = await this.inputView.getStartMonthDayInput();
    this.#startMonth = month;
    this.#startDay = day;

    this.#weekdayWorkerArray = await this.inputView.getWeekdayWorkerInput();
    this.#weekendWorkerArray = await this.inputView.getWeekendWorkerInput();
  }

  createScheduleTable() {
    return new ScheduleTable(
      this.#startMonth,
      this.#startDay,
      this.#weekdayWorkerArray,
      this.#weekendWorkerArray
    );
  }
}

export default OnCallController;
