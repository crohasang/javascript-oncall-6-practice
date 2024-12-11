const MONTH = Object.freeze({
  JANUARY: 31,
  FEBRUARY: 28,
  MARCH: 31,
  APRIL: 30,
  MAY: 31,
  JUNE: 30,
  JULY: 31,
  AUGUST: 31,
  SEPTEMBER: 30,
  OCTOBER: 31,
  NOVEMBER: 30,
  DECEMBER: 31,
});

const DAY = Object.freeze(["월", "화", "수", "목", "금", "토", "일"]);

const HOLIDAY = Object.freeze(
  [JANUARY, 1],
  [MARCH, 1],
  [MAY, 5],
  [JUNE, 6],
  [JULY, 15],
  [OCTOBER, 3],
  [OCTOBER, 9],
  [DECEMBER, 24]
);

const WORKER = Object.freeze({
  MINIMUM: 5,
  MAXIMUM: 35,
});

const NICKNAME = Object.freeze({
  MAXIMUM: 5,
});

export { MONTH, DAY, HOLIDAY, WORKER, NICKNAME };
