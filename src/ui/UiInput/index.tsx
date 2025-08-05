
import  { InputHTMLAttributes,useRef } from 'react';
import{ useState } from 'react';
import * as S from "./Input.styled";
interface UiInputProps extends InputHTMLAttributes<HTMLInputElement> {
  // Обязательные пропсы, которые могут быть специфичны для нашего UiInput
  value: string; // value явно указывается как string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Тип для onChange
  currentErr?: string|null; // Флаг наличия ошибки (опциональный)
  errorMessage?: boolean; // Сообщение об ошибке (может быть string, null, ReactNode)

  // ... другие специфичные пропсы, если они есть
}

const UiInput = ({
  placeholder = '',
  type = 'text',
  value,
  onChange,
  currentErr, 
  errorMessage,
  ...props
}:UiInputProps) => {
  const inputRef = useRef<null|HTMLInputElement>(null);
const [visible, setVisible] = useState(false)
  const handleClear = () => {
    debugger
    if (onChange) {

      onChange({target: {
    name: props.name,
    value: '',
   
  }}as React.ChangeEvent<HTMLInputElement>);
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








