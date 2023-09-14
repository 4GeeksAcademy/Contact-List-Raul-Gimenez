export default function getLastId(dataArray) {
    const ids = dataArray.map((item) => item.id);
    if (ids.length === 0) {
      return 0;
  }

  const maxId = Math.max(...ids);
  if (isNaN(maxId)) {
      throw new Error("Los IDs deben ser números válidos.");
  }

  return maxId + 1;
};
