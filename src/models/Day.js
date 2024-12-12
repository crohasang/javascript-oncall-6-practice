class Day {
  #month;

  #day;

  #dayOfWeek;

  #worker;

  #isDayHoliday;

  constructor({ month, day, dayOfWeek, worker, isDayHoliday }) {
    this.#month = month;
    this.#day = day;
    this.#dayOfWeek = dayOfWeek;
    this.#worker = worker;
    this.#isDayHoliday = isDayHoliday;
  }

  getMonth() {
    return this.#month;
  }

  getDay() {
    return this.#day;
  }

  getDayOfWeek() {
    return this.#dayOfWeek;
  }

  getWorker() {
    return this.#worker;
  }

  getWorkerName() {
    return this.#worker.name;
  }

  getIsDayHoliday() {
    return this.#isDayHoliday;
  }
}

export default Day;
