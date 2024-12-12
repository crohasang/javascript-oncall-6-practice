import ScheduleTable from "../models/ScheduleTable.js";
import workerArrayConverter from "../utils/workerArrayConverter.js";
import ValidateWorkerNumber from "../validators/ValidateWorkerNumber.js";
import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";

class OnCallController {
  #startMonth;

  #startDay;

  #weekdayWorkers;

  #weekendWorkers;

  #scheduleTable;

  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.#scheduleTable = [];
    this.#startMonth = null;
    this.#startDay = null;
    this.#weekdayWorkers = null;
    this.#weekendWorkers = null;
  }

  async play() {
    await this.getInput();

    ValidateWorkerNumber(this.#weekdayWorkers, this.#weekdayWorkers);

    const table = this.createScheduleTable();

    this.outputView.printTable(table);
  }

  async getInput() {
    const [month, day] = await this.inputView.getStartMonthDayInput();
    this.#startMonth = month;
    this.#startDay = day;

    this.#weekdayWorkers = await this.inputView.getWeekdayWorkerInput();
    this.#weekendWorkers = await this.inputView.getWeekendWorkerInput();
  }

  createScheduleTable() {
    const scheduleTable = new ScheduleTable(
      this.#startMonth,
      this.#startDay,
      workerArrayConverter(this.#weekdayWorkers),
      workerArrayConverter(this.#weekendWorkers)
    );
    return scheduleTable.getSchedule();
  }
}

export default OnCallController;
