"use client";
import { useUserCtx } from "@/app/providers/user";
import { RouteButton } from "@/components/buttons";
import { Button, ButtonProps } from "@nextui-org/button";
import { useRouter } from "next/navigation";

function LogoutButton() {
  const router = useRouter();

  return (
    <Button
      onPress={async () => {
        await fetch("/dsi/api/logout");
        router.push("/signin");
      }}
    >
      SignOut
    </Button>
  );
}

const LoginButton = () => <RouteButton href="/signin">Sign In</RouteButton>;

export const SignUpToButton = (props: ButtonProps) => (
  <RouteButton {...props} href="/signUp">
    Sign Up
  </RouteButton>
);
export function AuthButton() {
  const userCtx = useUserCtx();
  if (userCtx.user) {
    return <LogoutButton />;
  }
  return <LoginButton />;
}
