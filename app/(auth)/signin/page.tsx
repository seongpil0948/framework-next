import { subtitle, title } from "@/app/_components/primitives";
import { LoginForm } from "../_components/form";

export default function PageCSR() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Login to&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Abacus &nbsp;</h1>
        <br />
        <h2 className={subtitle({ class: "mt-4" })}>Login</h2>
      </div>
      <LoginForm />
    </section>
  );
}
