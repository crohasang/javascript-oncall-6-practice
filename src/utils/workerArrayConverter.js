export default function workerArrayConverter(workers) {
  const tempArray = workers.split(",");

  const workersArray = tempArray.map((worker) => ({
    name: worker,
    putInTable: false,
  }));

  return workersArray;
}
