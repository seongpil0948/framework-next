import { CardBasic } from "@/app/_components/cards";
import { title } from "@/app/_components/primitives";

export function ExampleComponent() {
  return (
    <CardBasic
      title={<h2 className={title({ color: "green" })}>card title</h2>}
      body={<p> Body </p>}
      footer="footer"
    />
  );
}
