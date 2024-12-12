import { WORKER_NUMBER_ERROR_MESSSAGES } from "../constants/errorMessages.js";

export default function validateWorkerNumber(weekdayWorkers, weekendWorkers) {
  const workersCombined = `${weekdayWorkers},${weekendWorkers}`;
  const tempArray = workersCombined.split(",");
  const uniqueArray = [...new Set(tempArray)];

  if (uniqueArray.length > 35) {
    throw new Error(WORKER_NUMBER_ERROR_MESSSAGES.WORKER_OVER_THIRTY_FIVE);
  }

  if (uniqueArray.length < 5) {
    throw new Error(WORKER_NUMBER_ERROR_MESSSAGES.WORKER_UNDER_FIVE);
  }
}
