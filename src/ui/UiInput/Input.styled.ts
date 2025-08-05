import styled from 'styled-components';

type Props = {
currentErr?:string|null
}
const InputWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['currentErr'].includes(prop as string),
})<Props>`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid ${props => props.currentErr ? '#dc3545' : '#ccc'}; /* Красный бордер при ошибке */
  border-radius: 4px;
  padding: 0 10px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
margin:10px 0;
  &:focus-within {
    border-color: ${props => props.currentErr ? '#dc3545' : '#007bff'}; /* Красный фокус при ошибке */
    box-shadow: 0 0 0 0.2rem ${props => props.currentErr ? 'rgba(220, 53, 69, 0.25)' : 'rgba(0, 123, 255, 0.25)'};
  }
`;

const StyledInput = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  padding: 8px 0;
  font-size: 16px;
  line-height: 1.5;
  background: transparent; 
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
   
    -webkit-text-fill-color: #000 !important;

    transition: background-color 5000s ease-in-out 0s !important;
  }
  
`;

const ClearButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #999;
  font-size: 18px;
  margin-left: 8px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:hover {
    color: #666;
    background-color: #eee;
  }
`;
const ErrorMessage = styled.span`
position:absolute;
top:-30px;
right:0px;
background-color: #ccc;
    padding:5px;
    border-radius:8px;
`
const ErrorIcon = styled.span`
  color: #dc3545; /* Красный цвет */
  font-size: 20px;
  background-color:  #fbb0b6ff;
    border-radius: 80%;
  padding: 3px;
width:15px;
  margin-left: 8px; /* Отступ от инпута */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0; /* Не сжимать иконку */
  cursor:pointer;
`;
export {InputWrapper,StyledInput,ClearButton,ErrorMessage,ErrorIcon}