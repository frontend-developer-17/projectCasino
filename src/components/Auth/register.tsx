import UiButton from "../../ui/ui-button";
import UiInput from "../../ui/UiInput";
import { useNavigate, useOutletContext } from "react-router";
function Register() {
  const navigate = useNavigate();
  console.log("register");
  
  const { formData, handleChange, currentErr,clearField } = useOutletContext();
  const pageСhange =()=>{
    clearField()
navigate("/auth/login")
  }
  return (
    <div className="">
      <div className="">
        <label htmlFor="">Имя:</label>
        <UiInput
          currentErr={currentErr?.userName?currentErr?.userName:null}
          name="userName"
          onChange={handleChange}
          value={formData.userName || ""}
          placeholder="Введите имя!"
          type="text"
        ></UiInput>
      </div>
      <div className="">
        <label htmlFor="">Почта:</label>

        <UiInput
          currentErr={currentErr?.email?currentErr?.email:null}
          name="email"
          onChange={handleChange}
          value={formData.email || ""}
          placeholder="Введите почту!"
          type="text"
        ></UiInput>
      </div>
      <div className="">
        <label htmlFor="">Пароль:</label>

        <UiInput
          currentErr={currentErr?.password?currentErr?.password:null}
          name="password"
          onChange={handleChange}
          value={formData.password || ""}
          placeholder="Введите пароль!"
          type="password"
        />
      </div>

      <span style={{ marginLeft: "10px" }}>
        Есть аккаунт?
        <UiButton type='button' onClick={pageСhange}>Войти</UiButton>
      </span>
    </div>
  );
}
export default Register;
