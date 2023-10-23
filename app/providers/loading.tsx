import { LoadingComponent } from "@/components/suspense";
import { useAppSelector } from "../store";

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const isLoading = useAppSelector((state) => state.common.loading);

  if (isLoading)
    return (
      <>
        <LoadingComponent />
        {children}
      </>
    );
  return <> {children}</>;
}
