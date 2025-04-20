import { useEffect, useState } from "react";
import { Session } from "../types";

export function useSession() {
  const [session, setSession] = useState<Session | null>(null);
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setSession(JSON.parse(token));
    } else {
      setSession(null);
    }
  }, []);

  return {
    session,
    setSession,
  };
}
