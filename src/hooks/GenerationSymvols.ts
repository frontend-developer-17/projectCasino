import { useState, useCallback } from "react";
import { Tboard } from "../types/CasinoBoard";
  
const useGenerateSimvols = () => {
 
  const [board, setBoard] = useState<Tboard[][]>([]);

  const generateSimvols = useCallback(() => {
    const elements:Tboard[] = [
      { image: "🍒", type: "apple" },
      { image: "🍋", type: "Lemon" },
      { image: "🍊", type: "Peach" },
      { image: "🍇", type: "Grape" },
      { image: "🍉", type: "Watermelon" },
      { image: "💎", type: "Diamond" },
      { image: "⭐️", type: "Star" },
      { image: "🔔", type: "Bell" },
    ];
    const numRows = 5;
    const numCols = 4;
    const resSimvols:Tboard[][] = [];

    for (let index = 0; index < numRows; index++) {
      const row:Tboard[]|null = [];
      for (let j = 0; j < numCols; j++) {
        if ((index === 0 && j === 0) || (index === 4 && j === 0)) {
          row.push(null);
        } else {
          row.push(elements[Math.floor(Math.random() * elements.length)]);
        }
        if (row.length === numCols) {
          resSimvols.push(row);
        }
      }
    }
    if (resSimvols.length === 5) {
      setBoard(resSimvols);
    }
  }, []);
  return { generateSimvols, board };

};


export default useGenerateSimvols;
