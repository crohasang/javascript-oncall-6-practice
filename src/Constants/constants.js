const MONTH = Object.freeze({
  JANUARY: 1,
  FEBRUARY: 2,
  MARCH: 3,
  APRIL: 4,
  MAY: 5,
  JUNE: 6,
  JULY: 7,
  AUGUST: 8,
  SEPTEMBER: 9,
  OCTOBER: 10,
  NOVEMBER: 11,
  DECEMBER: 12,

  DAY: {
    TWENTY_EIGHT: 28,
    THIRTY: 30,
    THIRTY_ONE: 31,
  },
});

const DAY_OF_WEEK = Object.freeze(["일", "월", "화", "수", "목", "금", "토"]);

const HOLIDAY = Object.freeze([
  {
    MONTH: MONTH.JANUARY,
    DAY: 1,
  },
  {
    MONTH: MONTH.MARCH,
    DAY: 1,
  },
  {
    MONTH: MONTH.MAY,
    DAY: 5,
  },
  {
    MONTH: MONTH.JUNE,
    DAY: 6,
  },
  {
    MONTH: MONTH.AUGUST,
    DAY: 15,
  },
  {
    MONTH: MONTH.OCTOBER,
    DAY: 3,
  },
  {
    MONTH: MONTH.OCTOBER,
    DAY: 9,
  },
  {
    MONTH: MONTH.DECEMBER,
    DAY: 25,
  },
]);

const WORKER = Object.freeze({
  MINIMUM: 5,
  MAXIMUM: 35,
});

const NICKNAME = Object.freeze({
  MAXIMUM: 5,
});

export { MONTH, DAY_OF_WEEK, HOLIDAY, WORKER, NICKNAME };
