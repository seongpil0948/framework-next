"use client";
import { useState } from "react";
import { setLoading, useAppDispatch } from "@/app/store";
import { Button } from "@nextui-org/button";
import { handleError } from "@/app/utils";
import { ForgetPasswordBtn } from "@/components/buttons";
import { InputEmail, InputPassword } from "@/components/input/field";
import { toast } from "react-toastify";
import { CardBasic } from "@/components/cards";
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
      console.log("handleSignIn");
      const body = await signIn();
      console.info("success to login: ", body);
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
