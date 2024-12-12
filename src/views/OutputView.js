import { Console } from "@woowacourse/mission-utils";

class OutputView {
  constructor(table) {
    this.table = table;
  }

  printTable(table) {
    table.forEach((day) => {
      if (day.getIsDayHoliday()) {
        Console.print(
          `${day.getMonth()}월 ${day.getDay()}일 ${day.getDayOfWeek()} ${day.getWorker()}`
        );
      } else {
        Console.print(
          `${day.getMonth()}월 ${day.getDay()}일 ${day.getDayOfWeek()} ${day.getWorker()}`
        );
      }
    });
  }
}

export default OutputView;
