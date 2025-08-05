import { Outlet, useLocation, useNavigate } from "react-router";
import UiButton from "../../ui/ui-button";
import * as S from "./Auth.styled";
import useSumbitForm from "../../components/Auth/submitForm";
import { useState, useCallback, useMemo } from "react";
function Authorisation() {
  const location = useLocation();
  const navigate = useNavigate()
  const isLoginPage = location.pathname.includes("auth/login");
  const requestedField = useMemo(
    () => ({ userName: "", email: "", password: "" }),
    []
  );
    const [currentErr, setCurrentErr] = useState<{[key:string]:string}|null>(null);

const { submitForm,  isError, isSuccess, isPending}= useSumbitForm(isLoginPage, setCurrentErr,navigate)
  const [formData, setFormData] = useState(requestedField);
console.log('isError',isError );
console.log('isSuccess',isSuccess );
console.log('isPending',isPending );


  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setCurrentErr((prev) => ({
      ...prev,
      [name]: "",
    }));
  }, []);

  const clearField = useCallback(
    () => {
      setFormData(requestedField);
      setCurrentErr(null);
    },
    [requestedField]
  );

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    submitForm(formData);
  };
  return (
    <div className="">
      <S.Wrapper>
        <S.Outlet>
          <form onSubmit={handleSubmit}>
            <S.Title>Авторизуйтесь!</S.Title>

            <Outlet
              context={{ formData, handleChange, currentErr, clearField }}
            />

            <UiButton
              onClick={() => handleSubmit}
              type="submit"
              isActive={isPending}
              
            >
              {isPending?"Загрузка...":isLoginPage ? "Войти" : "Зарегистрироваться"}
            </UiButton>
          </form>
        </S.Outlet>
      </S.Wrapper>
    </div>
  );
}
export default Authorisation;
