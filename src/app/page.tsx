import Image from "next/image";
import HomePage from "./HomePage/page";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] w-[100vw]">
      <HomePage />
    </div>
  );
}
