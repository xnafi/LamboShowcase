"use client";
import ShowCaseItems from "@/components/ShowCase/ShowCaseItems";

const ShowCase = ({ scrollYProgress }: any) => {
  return (
    <div className="relative grid w-full place-content-center bg-gradient-to-br text-slate-900 place-items-center">
      <ShowCaseItems scrollYProgress={scrollYProgress} />
    </div>
  );
};

export default ShowCase;
