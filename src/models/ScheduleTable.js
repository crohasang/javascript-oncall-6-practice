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

    this.createDays();
  }

  createDays() {
    for (
      let currentDay = 1;
      currentDay <= this.#calculateFinalDay();
      currentDay++
    ) {
      const currentDayOfWeek = this.#calculateDayOfWeek(currentDay);

      const isCurrentHoliday = this.#isHoliday(this.#startMonth, currentDay);

      // 휴일 비상근무
      if (
        isCurrentHoliday ||
        this.#calculateDayOfWeek(currentDay) === "토" ||
        this.#calculateDayOfWeek(currentDay) === "일"
      ) {
        const currentWeekendWorkerIndex = this.#findNextWorkerIndex(
          this.#weekendWorkerArray
        );

        const currentWeekendWorker =
          this.#weekendWorkerArray[currentWeekendWorkerIndex];

        this.#schedule.push(
          new Day({
            day: currentDay,
            dayOfWeek: currentDayOfWeek,
            worker: currentWeekendWorker,
            isDayHoliday: isCurrentHoliday,
          })
        );
      }

      // 평일 비상근무
      else {
        const currentWeekdayWorkerIndex = this.#findNextWorkerIndex(
          this.#weekdayWorkerArray
        );

        const currentWeekdayWorker =
          this.#weekdayWorkerArray[currentWeekdayWorkerIndex];

        this.#schedule.push(
          new Day({
            day: currentDay,
            dayOfWeek: currentDayOfWeek,
            worker: currentWeekdayWorker,
            isDayHoliday: isCurrentHoliday,
          })
        );
      }
    }

    return this.#schedule;
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

  #isHoliday(currentMonth, currentDay) {
    return HOLIDAY.some(
      (holiday) => currentMonth === holiday.MONTH && currentDay === holiday.DAY
    );
  }

  #findNextWorkerIndex(workerArray) {
    for (let i = 0; i < workerArray.length; i++) {
      if (workerArray.putInTable === false) {
        workerArray[i].putInTable = true;
        return i;
      }
    }

    return null;
  }
}

export default ScheduleTable;
