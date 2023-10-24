"use client";
import { useState } from "react";
import { setLoading, useAppDispatch } from "@/app/_store";
import { Button } from "@nextui-org/button";
import { handleError } from "@/app/_utils";
import { ForgetPasswordBtn } from "@/app/_components/buttons";
import { InputEmail, InputPassword } from "@/app/_components/input/field";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";

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
      const response = await fetch("/dsi/api/login", {
        method: "POST",
        body: `info1=${email}&info2=${password}`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          // Authorization: `Bearer ${await userCredential.user.getIdToken()}`,
        },
        signal: controller.signal,
      });
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
