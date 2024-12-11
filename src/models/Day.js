class Day {
  #day;

  #dayOfWeek;

  #worker;

  #isDayHoliday;

  constructor({day, dayOfWeek, worker, isDayHoliday}) {
    this.#day = day;
    this.#dayOfWeek = dayOfWeek;
    this.#worker = worker;
    this.#isDayHoliday = isDayHoliday;
  }
}

export default Day;
