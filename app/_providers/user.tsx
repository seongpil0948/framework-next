"use client";

import { useRouter, usePathname } from "next/navigation";
import {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from "react";
import { ContextUndefined } from "../_utils";
import { toast } from "react-toastify";

type TUser = any;
type RTU = ReturnType<typeof useState<TUser | null>>;
type UserContextType = {
  user: RTU[0];
  setUser: RTU[1];
  isAdmin: () => boolean;
  fetchSession: () => Promise<void>;
};

const PublicPath = ["/signin"];
export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<TUser | null>(null);
  const router = useRouter();
  const path = usePathname();

  const goLogin = useCallback(() => {
    toast.error("Please login first 🤯", { autoClose: 3000 });
    setUser(null);
    if (path === "/signin") return;
    else if (PublicPath.some((p) => p === path))
      return router.replace(`/signin`);
    router.replace(`/signin?redirectTo=${path}`);
  }, [path, router]);

  const fetchSession = async () => {
    try {
      const resp = await fetch("/dsi/api/common/session", {
        cache: "no-cache",
      });
      if (resp.status === 401) return goLogin();
      if (resp.status > 300 || resp.status < 200) {
        console.error("error status code", resp);
      }
      const body = (await resp.json()).body;
      setUser(body as TUser);
    } catch (e) {
      console.error("unexpected error", e);
      goLogin();
    }
  };

  useEffect(() => {
    // if (user) return;
    fetchSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isAdmin: () => user?.uid === "za4rvRj9rrYfovUkMc9TqLA39GG2",
        fetchSession,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

// Custom hook that shorthands the context!
export const useUserCtx = () => {
  const ctx = useContext(UserContext);
  if (ctx === undefined) {
    throw new ContextUndefined("UserContext");
  }
  return ctx;
};
