import styled from "styled-components";
import { Tboard, TsimilarSymbols } from "../../types/CasinoBoard";
type ItemElStyled = {
  activeEl?: TsimilarSymbols ;
  cell: Tboard | null;
};

const BoardList = styled.div`
  display: grid;
  grid-template-columns: 4;
  background-color: rgb(170, 208, 212);
  width: min-content;
  padding: 20px;
  border-radius: 12px;
  justify-content: center;
  align-content: center;
`;

const Row = styled.div`
  display: flex;
`;

const ActiveEl =`
  border: 3px solid rgb(236, 6, 217);
  background-color: rgb(203, 188, 201);
`;
const Empty = `
  background-color: lightgray;
`;

const ItemEl = styled.div.withConfig({
  shouldForwardProp: (prop) => !['cell', 'activeEl'].includes(prop as string),
})<ItemElStyled>`
  ${(props) => (props.cell!=null ? props.cell.image : Empty)};
  width: 70px;
  height: 70px;
  border: 3px solid rgb(87, 80, 80);
  border-radius: 8px;
  margin: 10px;
  font-size: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => (props.activeEl? ActiveEl : "")};
`;

const SymbolsEl = styled.div`
  width: max-content;
`;
const WrapperButton = styled.div`
  display: "flex";
justify-self: center;`;

const ButtonGenerate = styled.button`

  padding: 5px;
  border-radius: 8px;
  border: solid 2px orange;
  margin-top: 15px;
  background-color: rgb(173, 218, 207);
`;
export {
  BoardList,
  Row,
  ItemEl,
  ActiveEl,
  Empty,
  SymbolsEl,
  ButtonGenerate,
  WrapperButton,
};
