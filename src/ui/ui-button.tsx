import styled from "styled-components";

const Button = styled.button<{ width?: string }>`
  background-color: rgb(230, 226, 226);
  padding: 7px;
  border-radius: 10px;
  width: ${(props) => (props.width ? props.width + "px" : "min-content")};
  border: none;
  padding: 10px;
  color: rgb(164, 116, 209);
  margin: 5px;
`;
type Props = {
  onClick: () => void;
  children: React.ReactNode;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  width?: string;
  isActive?:boolean
};

function UiButton({ onClick,isActive, children, type, ...props }: Props) {
  return (
    <Button  disabled={isActive} type={type} onClick={onClick} className="ui-button " {...props}>
      {children}
    </Button>
  );
}
export default UiButton;
