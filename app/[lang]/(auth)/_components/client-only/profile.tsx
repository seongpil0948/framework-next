"use client";
import { useUserCtx } from "@/app/_providers/user";
import { Code } from "@nextui-org/code";
import { Snippet } from "@nextui-org/snippet";

export function UserProfile() {
  const userCtx = useUserCtx();
  return (
    <>
      <Snippet hideSymbol hideCopyButton variant="flat">
        <span>
          In <Code color="primary">app/page.tsx</Code>
        </span>
      </Snippet>
      <p>
        Hello. <span className="font-bold">{userCtx.user?.userName}</span>
      </p>
    </>
  );
}
