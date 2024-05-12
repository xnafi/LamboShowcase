import Home from "./page";
import Template from "./template";

export default function ShowCaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className={` font-sans w-full max-w-[1400px] flex flex-col justify-center items-center mx-auto custom-cursor container h-full`}
    >
      <Template>
        <Home />
      </Template>
    </section>
  );
}
