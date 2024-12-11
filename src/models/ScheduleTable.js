import { DAY_OF_WEEK, HOLIDAY, MONTH } from "../constants/constants.js";
import Day from "./Day.js";

class ScheduleTable {
  #schedule;

  #startMonth;

  #startDayOfWeek;

  #weekdayWorkerArray;

  #weekendWorkerArray;

  constructor(
    startMonth,
    startDayOfWeek,
    weekdayWorkerArray,
    weekendWorkerArray
  ) {
    this.#schedule = [];
    this.#startMonth = startMonth;
    this.#startDayOfWeek = startDayOfWeek;
    this.#weekdayWorkerArray = weekdayWorkerArray;
    this.#weekendWorkerArray = weekendWorkerArray;
  }

  createDays() {
    for (
      let currentDay = 1;
      currentDay <= this.#calculateFinalDay();
      currentDay++
    ) {
      this.#schedule.push(
        new Day({
          currentDay,
          dayOfWeek: this.#calculateDayOfWeek(currentDay),
          isHoliday: this.#isHoliday,
        })
      );
    }
  }

  #calculateFinalDay() {
    switch (this.#startMonth) {
      case MONTH.JANUARY:
        return MONTH.DAY.THIRTY_ONE;
      case MONTH.FEBRUARY:
        return MONTH.DAY.TWENTY_EIGHT;
      case MONTH.MARCH:
        return MONTH.DAY.THIRTY_ONE;
      case MONTH.APRIL:
        return MONTH.DAY.THIRTY;
      case MONTH.MAY:
        return MONTH.DAY.THIRTY_ONE;
      case MONTH.JUNE:
        return MONTH.DAY.THIRTY;
      case MONTH.JULY:
        return MONTH.DAY.THIRTY_ONE;
      case MONTH.AUGUST:
        return MONTH.DAY.THIRTY_ONE;
      case MONTH.SEPTEMBER:
        return MONTH.DAY.THIRTY;
      case MONTH.OCTOBER:
        return MONTH.DAY.THIRTY_ONE;
      case MONTH.NOVEMBER:
        return MONTH.DAY.THIRTY;
      case MONTH.DECEMBER:
        return MONTH.DAY.THIRTY_ONE;
      default:
        return MONTH.DAY.THIRTY_ONE;
    }
  }

  #calculateDayOfWeek(currentDay) {
    const startDayOfWeekIndex = DAY_OF_WEEK.indexOf(this.#startDayOfWeek);
    const currentDayRemainder = currentDay % 7;

    return DAY_OF_WEEK[(startDayOfWeekIndex + currentDayRemainder) % 7];
  }

  #isHoliday(currentDay) {
    return HOLIDAY.some(
      (holiday) =>
        this.#startMonth === holiday.MONTH && currentDay === holiday.DAY
    );
  }
}

export default ScheduleTable;
