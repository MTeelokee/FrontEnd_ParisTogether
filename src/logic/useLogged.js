import axios from "axios";
import { useEffect, useState } from "react";

const useLogged = () => {
  const token = localStorage.getItem("auth-token");
  const [user, setUser] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://back-end-paris-together-czx8nkl1c-mteelokee.vercel.app/request/user",
        {
          headers: { authorization: token },
        }
      )
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, [user]);

  return [user];
};

export default useLogged;
