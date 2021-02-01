import { v4 as uuidv4 } from "uuid";

function createRandomSelection(n) {
  let indexNumbers = [];
  while (indexNumbers.length !== n * 2) {
    let randomNum = Math.floor(Math.random() * n);
    if (
      indexNumbers.indexOf(randomNum) === -1 ||
      indexNumbers.indexOf(randomNum) === indexNumbers.lastIndexOf(randomNum)
    ) {
      indexNumbers.push(randomNum);
    }
  }
  return indexNumbers;
}
export function createGame(gameData) {
  const randomData = [];
  const amount = gameData.length;
  const selection = createRandomSelection(amount);
  selection.forEach((index) =>
    randomData.push({ id: uuidv4(), img: gameData[index] })
  );
  return randomData;
}
