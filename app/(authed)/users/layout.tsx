import { ReactNode } from "react";

export default function UsersLayout({ children }: { children: ReactNode }) {
  return (
    <section className="m-4">
      <section className="flex flex-row flex-wrap w-full">{children}</section>
    </section>
  );
}
