import { useNavigate } from "react-router";
import BoardCasino from "../../components/Board/BoardCasino";
import * as S from "./Home.styled";
import { useMutation, useQuery } from "@tanstack/react-query";
import { logout, meInfo } from "../../Axios";
import { ResponseCurrentUser } from "../../types/Auth";
import { AxiosResponse } from "axios";
import UiButton from "../../ui/ui-button";

function Home() {
  const navigate = useNavigate();
  const { data, isPending } = useQuery<AxiosResponse<ResponseCurrentUser>, Error>({
    queryKey: ["user"],
    queryFn: meInfo,
  });
console.log("USERdata", data);

  const { mutate } = useMutation({
    mutationFn: logout, 
    onSuccess: () => {
      debugger;
      localStorage.removeItem("accessToken");
        navigate("/auth/register")

    },
    onError: (error) => {
      debugger;
      console.error("Ошибка при регистрации:", error);
    },
  });
 
  return (
    <div className="">
      <span>Добро пожаловать в мир казино {isPending?"Загрузка":data?.data.user.name}</span>
      <S.Wrapper>
        <BoardCasino />
      </S.Wrapper>
      <UiButton onClick={mutate}>Выйти</UiButton>
    </div>
  );
}
export default Home;
