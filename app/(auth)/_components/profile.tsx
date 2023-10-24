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
          Hi <Code color="primary">app/page.tsx</Code>
        </span>
      </Snippet>
      {JSON.stringify(userCtx.user, null, 4)}
    </>
  );
}
