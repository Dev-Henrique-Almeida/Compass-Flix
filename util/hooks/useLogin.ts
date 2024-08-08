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
      const baseUrl = `${window.location.protocol}//${window.location.host}`;

      // Verifique se o requestToken foi obtido corretamente
      if (requestToken) {
        router.replace(`/login/${requestToken}?redirect_to=${baseUrl}`);
      } else {
        throw new Error("Failed to get request token");
      }
    } catch (error) {
      console.error("Authentication error:", error);
    }
  }

  return {
    values: { ...users },
    actions: { ...actions.users },
    helpers: { auth: authenticate },
  };
}
