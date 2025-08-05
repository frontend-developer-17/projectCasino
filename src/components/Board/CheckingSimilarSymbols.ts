import { TsimilarSymbols,Tboard } from "../../types/CasinoBoard";

type countSimilar = {
[key:string]:number
}
function CheckSymilar(board:Tboard[][]): TsimilarSymbols[]{
  const resultArr:TsimilarSymbols[] = [];
  const obj:countSimilar = {};
  const cols = 3;
  const rows = 4;

  const sheckOneSymvols = (currentEl:Tboard, i:number, j:number):boolean => {
    let isSimilar = false;
    if (board[i - 1][j + 1]?.type === currentEl?.type) {
      //Правое верхнее
      isSimilar = true;
    }
    if (board[i][j + 1]?.type === currentEl?.type) {
      //правое
      isSimilar = true;
    }
    if (board[i + 1][j + 1]?.type === currentEl?.type) {
      //Нижнее правое
      isSimilar = true;
    }
    return isSimilar;
  };

  for (let j = 0; j <= cols; j++) {
    for (let i = 0; i <= rows; i++) {
      let isSimilarSimvol = false;
     const currentEl:Tboard|null = board[i][j];

      if (currentEl!==null) {
        if (j === 0) {
          if (sheckOneSymvols(currentEl, i, j)) {
            resultArr.push({ type: currentEl.type, x: i, y: j });
            if (obj[currentEl.type]) {
              obj[currentEl.type]++;
            } else {
              obj[currentEl.type] = 1;
            }
          }
          continue;
        }
        // проверка нулевых значений
        if (
          i !== rows &&
          j !== 0 &&
          board[i + 1][j - 1]?.type === currentEl.type
        ) {
          if (resultArr.find((el) => el.x === i + 1 && el.y === j - 1)) {
            isSimilarSimvol = true;
          }
        }
        if (j !== 0 && board[i][j - 1]?.type === currentEl.type) {
          if (resultArr.find((el) => el.x === i && el.y === j - 1)) {
            isSimilarSimvol = true;
          }
        }
        if (
          i !== 0 &&
          j !== 0 &&
          board[i - 1][j - 1]?.type === currentEl.type
        ) {
          if (resultArr.find((el) => el.x === i - 1 && el.y === j - 1)) {
            isSimilarSimvol = true;
          }
        }
        if (isSimilarSimvol && obj[currentEl.type]) {
          resultArr.push({ type: currentEl.type, x: i, y: j });
          obj[currentEl.type]++;
        }
      }
    }
  }

  const resultArrSimilar = resultArr.filter((el) => {
    if (obj[el.type] > 2) {
      return el;
    }
    return null
  });

  return resultArrSimilar;
}
export default CheckSymilar;
