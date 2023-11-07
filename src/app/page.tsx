import AOSWrapper from "@/components/AosWrapper/page";
import BannerPage from "./BannerPage/page";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-[100%] !max-w-[1400px]">
      <AOSWrapper>
        <BannerPage />
      </AOSWrapper>
    </div>
  );
}
