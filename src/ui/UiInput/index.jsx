
import  {  useRef } from 'react';
import{ useState } from 'react';
import * as S from "./Input.styled";


const UiInput = ({
  placeholder = '',
  type = 'text',
  value,
  onChange,
  currentErr, 
  errorMessage,
  ...props
}) => {
  const inputRef = useRef(null);
const [visible, setVisible] = useState(false)
  const handleClear = () => {
    debugger
    if (onChange) {
      onChange({ target: { name: props.name, value: '' } });
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
      <S.InputWrapper currentErr={currentErr}>
        <S.StyledInput
          ref={inputRef}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...props}
        />
        {currentErr && <S.ErrorIcon   onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}>  !</S.ErrorIcon>} 
        {visible&& <S.ErrorMessage>{currentErr??''} </S.ErrorMessage>}
        {value && (
          <S.ClearButton onClick={handleClear} aria-label="Очистить поле ввода">
            &times;
          </S.ClearButton>
        )}
      </S.InputWrapper>
  );
};

export default UiInput;



// import  {  useRef } from 'react';
// import styled from 'styled-components';


// const InputWrapper = styled.div`
// position: relative;
//   display: flex;
//   align-items: center;
//     border: 1px solid ${props => props.currentErr ? '#dc3545' : '#ccc'}
//   border-radius: 4px;
//   padding: 0 10px;
//   width: 100%;
//   max-width: 300px;
//   box-sizing: border-box;
//   transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

//   &:focus-within {
//      border-color: ${props => props.currentErr ? '#dc3545' : '#007bff'};
// box-shadow: 0 0 0 0.2rem ${props => props.currentErr ? 'rgba(220, 53, 69, 0.25)' : 'rgba(0, 123, 255, 0.25)'};  }
   

// `;

// const StyledInput = styled.input`
//  flex-grow: 1;
//   border: none;
//   outline: none;
//   padding: 8px 0;
//   font-size: 16px;
//   line-height: 1.5;
//   background: transparent;
// `;

// const ErrorIcon = styled.span`
//   color: #dc3545; /* Красный цвет */
//   font-size: 20px;
//   background-color:  #fbb0b6ff;
//     border-radius: 80%;
//   padding: 3px;
// width:15px;
//   margin-left: 8px; /* Отступ от инпута */
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-shrink: 0; /* Не сжимать иконку */
// `;



// const ClearButton = styled.button`
//    background: none;
//   border: none;
//   cursor: pointer;
//   color: #999;
//   font-size: 18px;
//   margin-left: 8px;
//   padding: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 24px;
//   height: 24px;
//   border-radius: 50%;
//   transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

//   &:hover {
//     color: #666;
//     background-color: #eee;
//   }
// `;

// const UiInput = ({
//   value,
//   placeholder = '',  
//   type = 'text',
//   onChange,
//   currentErr, 
//  ...rest         
// }) => {
//   const inputRef = useRef(null); 

  
// console.log('currentErrsss', currentErr);

//   const handleClear = () => {
// onChange({ target: { name: rest.name, value: '' } });  
//   if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   };

//   return (
//     <InputWrapper>
//       <StyledInput
//         ref={inputRef}
//         type={type}
//         value={value}
//          onChange={onChange}
//         placeholder={placeholder}
//         {...rest} 
//       />
//         {currentErr && <ErrorIcon>!</ErrorIcon>}
//       {value && ( 
//         <ClearButton onClick={handleClear}>
//           &times; 
//         </ClearButton>
//       )}
//     </InputWrapper>
//   );
// };

// export default UiInput;




