import { rigistration, login } from "../../Axios";
import { useMutation } from "@tanstack/react-query";
const useSumbitForm = (isLoginPage, setCurrentErr, navigate) => {
  const setError = (name) => {
    const err = new Error("Это поле обязательное!");
    setCurrentErr((prev) => ({
      ...prev,
      [name]: err.message,
    }));
  };

  const mutationFn = isLoginPage ? login : rigistration;
  debugger;
  const { mutate, isError, isPending, isSuccess, error, data } =
    useMutation({
      mutationFn: mutationFn, // Передаем нашу функцию для регистрации
      onSuccess: (data) => {
        debugger;
        localStorage.setItem('accessToken', data.data.accessToken)
        console.log("Регистрация успешна register!", data);
        navigate("/")
      },
      onError: (error) => {
        debugger;
        // Это выполнится, если запрос registerUser вернет ошибку (например, 400, 409, 500)
        console.error("Ошибка при регистрации:", error);
      },
    });

  const submitForm = async (formData) => {
    const { email, password, userName } = formData;

    if (isLoginPage) {
      if (email && password) {
        try {
          mutate({
            email: formData.email,
            password: formData.password,
          });
        } catch (error) {
          const errPassword = "password";
          const err = new Error("Неверный пароль.");
          setCurrentErr((prev) => ({
            ...prev,
            [errPassword]: err.message,
          }));
        }
      } else {
        !email && setError("email");
        !password && setError("password");
      }
    } else {
      if (email && password && userName) {
        mutate({
          name: formData.userName,
          ...formData,
        });
      } else {
        !email && setError("email");
        !password && setError("password");
        !userName && setError("userName");
      }
    }
    console.log("res", formData);
  };
  return {
    submitForm,
    isError,
    isSuccess,
    data,
    error,
    isPending,
  };
};
export default useSumbitForm;
