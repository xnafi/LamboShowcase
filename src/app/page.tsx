import Image from "next/image";
import BannerPage from "./BannerPage/page";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] w-[100vw] max-w-[1400px]">
      <BannerPage />
    </div>
  );
}
