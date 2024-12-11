import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGES } from "../constants/messages.js";

class InputView {
  constructor() {
    this.startMonth = null;
    this.startDay = null;
  }

  async getStartMonthDayInput() {
    const monthAndDay = await Console.readLineAsync(
      INPUT_MESSAGES.START_MONTH_DAY_INPUT
    );

    const [month, day] = monthAndDay.split(",");

    this.startMonth = month;
    this.startDay = day;
  }

  async getWeekdayWorkerInput() {
    const weekdayWorker = await Console.readLineAsync(
      INPUT_MESSAGES.WEEKDAY_WORKER_INPUT
    );
  }

  async getWeekendWorkerInput() {
    const weekendWorker = await Console.readLineAsync(
      INPUT_MESSAGES.WEEKEND_WORKER_INPUT
    );
  }
}

export default InputView;
