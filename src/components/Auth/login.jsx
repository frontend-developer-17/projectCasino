import UiButton from "../../ui/ui-button";
import UiInput from "../../ui/UiInput";
import { useNavigate, useOutletContext } from "react-router";

function Login() {
  const navigate = useNavigate();
  const { formData, handleChange, currentErr,clearField } = useOutletContext();
 
  console.log("login");
  debugger
const pageСhange =()=>{
clearField()
navigate("/auth/register")
  }
  return (
    <div className="">
      <div className="">
        <label htmlFor="">Почта:</label>
        <UiInput
          currentErr={currentErr?.email?currentErr?.email:null}
          name="email"
          value={formData.email || ""}
          onChange={handleChange}
          placeholder="Введите почту!"
          type="text"
        />
      </div>
      <div className="">
        <label htmlFor="">Пароль:</label>
        <UiInput
          currentErr={currentErr?.password?currentErr?.password:null}
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Введите пароль!"
          type="password"
        />
      </div>
      <span style={{ marginLeft: "10px" }}>
        Не можете войти?
        <UiButton type='button' onClick={pageСhange}>
          Регистрация
        </UiButton>
      </span>
    </div>
  );
}
export default Login;
