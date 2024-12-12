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
    let yesterdayWorker = "";

    for (
      let currentDay = 1;
      currentDay <= this.#calculateFinalDay();
      currentDay++
    ) {
      const currentMonth = this.#startMonth;

      const currentDayOfWeek = this.#calculateDayOfWeek(currentDay);

      const isCurrentHoliday = this.#isHoliday(
        Number(this.#startMonth),
        currentDay
      );

      // 휴일 비상근무
      if (
        isCurrentHoliday ||
        this.#calculateDayOfWeek(currentDay) === "토" ||
        this.#calculateDayOfWeek(currentDay) === "일"
      ) {
        const currentWeekendWorkerIndex = this.#findNextWorkerIndex(
          this.#weekendWorkerArray
        );

        // 모든 근무자가 이미 배정되었으면 종료
        if (currentWeekendWorkerIndex === null) {
          return this.#schedule;
        }

        let currentWeekendWorker =
          this.#weekendWorkerArray[currentWeekendWorkerIndex];

        if (
          this.#isWorkedYesterday(currentWeekendWorker.name, yesterdayWorker)
        ) {
          this.#weekendWorkerArray[currentWeekendWorkerIndex] =
            this.#weekendWorkerArray[currentWeekendWorkerIndex + 1];
          this.#weekendWorkerArray[currentWeekendWorkerIndex + 1] =
            currentWeekendWorker;
          currentWeekendWorker =
            this.#weekendWorkerArray[currentWeekendWorkerIndex];
        }

        this.#schedule.push(
          new Day({
            month: currentMonth,
            day: currentDay,
            dayOfWeek: currentDayOfWeek,
            worker: currentWeekendWorker.name,
            isDayHoliday: isCurrentHoliday,
          })
        );

        yesterdayWorker = currentWeekendWorker.name;
      }

      // 평일 비상근무
      else {
        const currentWeekdayWorkerIndex = this.#findNextWorkerIndex(
          this.#weekdayWorkerArray
        );

        // 모든 근무자가 이미 배정되었으면 종료
        if (currentWeekdayWorkerIndex === null) {
          return this.#schedule;
        }

        let currentWeekdayWorker =
          this.#weekdayWorkerArray[currentWeekdayWorkerIndex];

        if (
          this.#isWorkedYesterday(currentWeekdayWorker.name, yesterdayWorker)
        ) {
          this.#weekdayWorkerArray[currentWeekdayWorkerIndex] =
            this.#weekdayWorkerArray[currentWeekdayWorkerIndex + 1];
          this.#weekdayWorkerArray[currentWeekdayWorkerIndex + 1] =
            currentWeekdayWorker;
          currentWeekdayWorker =
            this.#weekendWorkerArray[currentWeekdayWorkerIndex];
        }
        this.#schedule.push(
          new Day({
            month: currentMonth,
            day: currentDay,
            dayOfWeek: currentDayOfWeek,
            worker: currentWeekdayWorker.name,
            isDayHoliday: isCurrentHoliday,
          })
        );

        yesterdayWorker = currentWeekdayWorker.name;
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
    const currentDayRemainder = (currentDay - 1) % 7;

    return DAY_OF_WEEK[(startDayOfWeekIndex + currentDayRemainder) % 7];
  }

  #isHoliday(currentMonth, currentDay) {
    return HOLIDAY.some(
      (holiday) => currentMonth === holiday.MONTH && currentDay === holiday.DAY
    );
  }

  #findNextWorkerIndex(workerArray) {
    for (let i = 0; i < workerArray.length; i++) {
      if (!workerArray[i].putInTable) {
        workerArray[i].putInTable = true;
        return i;
      }
    }

    return null;
  }

  #isWorkedYesterday(currentWorkerName, yesterdayWorkerName) {
    if (currentWorkerName === yesterdayWorkerName) {
      return true;
    }

    return false;
  }

  getSchedule() {
    return this.#schedule;
  }
}

export default ScheduleTable;
