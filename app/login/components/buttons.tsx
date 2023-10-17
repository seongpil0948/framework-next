"use client";
import { RouteButton } from "@/components/buttons";
import { Button, ButtonProps } from "@nextui-org/button";
import { useRouter } from "next/navigation";

function LogoutButton() {
  const router = useRouter();
  return <Button onPress={() => router.push("/login")}>SignOut</Button>;
}

const LoginButton = () => <RouteButton href="/login">Sign In</RouteButton>;

export const SignUpToButton = (props: ButtonProps) => (
  <RouteButton {...props} href="/signUp">
    Sign Up
  </RouteButton>
);
export function AuthButton() {
  const isAuthenticated = false;
  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
}
