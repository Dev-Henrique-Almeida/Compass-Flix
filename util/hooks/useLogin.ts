import { useRouter } from "next/navigation";
import { actions, useDispatch, useSelector } from "../../store";
import { useEffect } from "react";
import tmdb from "../tmdb";

export default function useLogin() {
  const router = useRouter();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(actions.users.loadUsers());
  }, [dispatch]);

  async function authenticate() {
    try {
      const requestToken = (await tmdb.get("authentication/token/new"))[
        "request_token"
      ];

      // Obter a URL base dinamicamente
      let baseUrl = `${window.location.protocol}//${window.location.host}`;

      // Adicionar "/home" se não for localhost:3000
      if (window.location.host !== "localhost:3000") {
        baseUrl += "/home";
      }

      router.replace(`/login/${requestToken}?redirect_to=${baseUrl}`);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    values: { ...users },
    actions: { ...actions.users },
    helpers: { auth: authenticate },
  };
}
