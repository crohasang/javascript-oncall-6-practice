import ScheduleTable from "../models/ScheduleTable.js";
import workerArrayConverter from "../utils/workerArrayConverter.js";
import InputView from "../views/InputView.js";

class OnCallController {
  #startMonth;

  #startDay;

  #weekdayWorkers;

  #weekendWorkers;

  #scheduleTable;

  constructor() {
    this.inputView = new InputView();
    this.#scheduleTable = [];
    this.#startMonth = null;
    this.#startDay = null;
    this.#weekdayWorkers = null;
    this.#weekendWorkers = null;
  }

  async play() {
    await this.getInput();

    const table = this.createScheduleTable();
    console.log(table);
  }

  async getInput() {
    const [month, day] = await this.inputView.getStartMonthDayInput();
    this.#startMonth = month;
    this.#startDay = day;

    this.#weekdayWorkers = await this.inputView.getWeekdayWorkerInput();
    this.#weekendWorkers = await this.inputView.getWeekendWorkerInput();
  }

  createScheduleTable() {
    return new ScheduleTable(
      this.#startMonth,
      this.#startDay,
      workerArrayConverter(this.#weekdayWorkers),
      workerArrayConverter(this.#weekendWorkers)
    );
  }
}

export default OnCallController;
