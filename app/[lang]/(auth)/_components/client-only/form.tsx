"use client";
import { useState } from "react";
import { setLoading, useAppDispatch } from "@/app/_store";
import { Button } from "@nextui-org/button";
import { handleError } from "@/app/_utils";
import { ForgetPasswordBtn } from "@/app/_components/client-only/buttons";
import {
  InputEmail,
  InputPassword,
} from "@/app/_components/client-only/input/fields";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import { useUserCtx } from "@/app/_providers/user";
import { fetcher } from "@/app/_utils/fetch";

export function EmailForm(p: {
  email: string;
  setEmail: (s: string) => void;
  password: string;
  setPassword: (s: string) => void;
}) {
  return (
    <form>
      <InputEmail {...p} />
      <InputPassword {...p} />
    </form>
  );
}

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const router = useRouter();
  const param = useSearchParams();
  const { fetchSession } = useUserCtx();

  const pushNextPage = () => {
    const redirectTo = param.get("redirectTo");
    if (redirectTo) {
      return router.push(redirectTo);
    }
    router.push("/");
  };

  const signIn = async () => {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort("timeout"), 3000);
    try {
      const response = await fetcher(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_PATH}/login?info1=admin&info2=U2FsdGVkX1%2FW9xtgxK5iaWm6Wsbmi5y1PoUf2WP5SSk%3D`,
        {
          method: "POST",
          signal: controller.signal,
        }
      );
      // const response = await fetcher(
      //   `${process.env.NEXT_PUBLIC_BACKEND_BASE_PATH}/login`,
      //   {
      //     method: "POST",
      //     body: `info1=${email}&info2=${password}`,
      //     headers: {
      //       "Content-Type": "application/x-www-form-urlencoded",
      //       // Authorization: `Bearer ${await userCredential.user.getIdToken()}`,
      //     },
      //     signal: controller.signal,
      //   }
      // );
      if (!response.ok)
        throw new Error(
          `에러: ${response.status} ${
            response.statusText
          } ${await response.text()}`
        );
      return response.json();
    } finally {
      clearTimeout(id);
    }
  };

  const handleSignIn = async () => {
    dispatch(setLoading(true));
    try {
      await signIn();
      await fetchSession();
      pushNextPage();
    } catch (e) {
      const result = handleError(e);
      toast.error(result.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
  const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") handleSignIn();
  };
  return (
    <div onKeyUp={handleKeyUp} className="flex flex-col gap-3">
      <EmailForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <ForgetPasswordBtn />
      <Button className="flex-1 py-2" color="primary" onPress={handleSignIn}>
        Sign in
      </Button>
    </div>
  );
}
