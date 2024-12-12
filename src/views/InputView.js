import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGES } from "../constants/messages.js";
import { validateNicknameDuplicatedOrOverFive } from "../validators/ValidateNickname.js";

class InputView {
  async getStartMonthDayInput() {
    const monthAndDay = await Console.readLineAsync(
      INPUT_MESSAGES.START_MONTH_DAY_INPUT
    );

    const [month, day] = monthAndDay.split(",");

    return [month, day];
  }

  async getWeekdayWorkerInput() {
    const weekdayWorker = await Console.readLineAsync(
      INPUT_MESSAGES.WEEKDAY_WORKER_INPUT
    );

    try {
      validateNicknameDuplicatedOrOverFive(weekdayWorker);
      return weekdayWorker;
    } catch (error) {
      Console.print(error.message);
      return this.getWeekdayWorkerInput();
    }
  }

  async getWeekendWorkerInput() {
    const weekendWorker = await Console.readLineAsync(
      INPUT_MESSAGES.WEEKEND_WORKER_INPUT
    );

    try {
      validateNicknameDuplicatedOrOverFive(weekendWorker);
      return weekendWorker;
    } catch (error) {
      Console.print(error.message);
      return this.getWeekendWorkerInput();
    }
  }
}

export default InputView;
