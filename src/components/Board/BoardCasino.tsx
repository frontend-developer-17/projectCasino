import { useEffect, useState } from "react";
import useGenerateSimvols from "../../hooks/GenerationSymvols";
import CheckSymilar from "./CheckingSimilarSymbols";
import UiButton from "../../ui/ui-button";
import * as S from "./Board.styles";
import { TsimilarSymbols } from "../../types/CasinoBoard";

function BoardList() {
  const [similarSymbols, setSymiralSymbols] = useState<TsimilarSymbols[]>([]);

  const { generateSimvols, board } = useGenerateSimvols();
  useEffect(() => {
    generateSimvols();
  }, [generateSimvols]);

  useEffect(() => {
    if (board.length > 0) {
      const result = CheckSymilar(board);
      setSymiralSymbols(result);
      console.log("result", result);
    }
  }, [board]);
  return (
    <S.BoardList>
      {board.map((row, index) => (
        <S.Row key={index} className="row">
          {row.map((cell, colIndex) => {
            let activeEl: TsimilarSymbols | undefined;
            if (similarSymbols.length > 0) {
              activeEl = similarSymbols?.find(
                (el) =>
                  el.type === cell?.type && el.x === index && el.y === colIndex
              );
              
            }

            return (
              <S.ItemEl key={colIndex} cell={cell?cell:null} activeEl={activeEl}>
                {cell?.image}
              </S.ItemEl>
            );
          })}
        </S.Row>
      ))}
      <S.WrapperButton>
        <UiButton onClick={generateSimvols} width={"300"}>          Играть!!
        </UiButton>
      </S.WrapperButton>
    </S.BoardList>
  );
}
export default BoardList;
