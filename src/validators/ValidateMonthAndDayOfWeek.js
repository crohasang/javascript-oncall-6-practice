import { INPUT_ERROR_MESSAGES } from "../constants/errorMessages.js";

export function validateMonthAndDayOfWeek(month, dayOfWeek) {
  if (Number.isInteger(month) || month < 1 || month > 12) {
    throw new Error(INPUT_ERROR_MESSAGES.INVALID_INPUT);
  }

  const dayOfWeekRegex = /^(월|화|수|목|금|토|일)$/;

  if (!dayOfWeekRegex.test(dayOfWeek)) {
    throw new Error(INPUT_ERROR_MESSAGES.INVALID_INPUT);
  }
}
