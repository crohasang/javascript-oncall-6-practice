class Day {
  #day;

  #dayOfWeek;

  #isHoliday;

  #worker;

  constructor(day, dayOfWeek, worker) {
    this.#day = day;
    this.#dayOfWeek = dayOfWeek;
    this.#isHoliday = false;
    this.#worker = worker;
  }
}

export default Day;
