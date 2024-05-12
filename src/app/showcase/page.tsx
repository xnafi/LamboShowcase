import ShowCaseItems from "@/components/ShowCase/ShowCaseItems";
import ShowCaseLayout from "../layout";

const ShowCase = () => {
  return (
    <div className="grid w-full place-content-center bg-gradient-to-br text-slate-900 place-items-center">
      <div className="flex gap-x-3 md:gap-x-4">
        <h1 className="headings text-yellow-600 mb-10">SPEEDING</h1>
        <h1 className="headings text-yellow-600 mb-10"> BEASTS</h1>
      </div>

      <ShowCaseItems />
    </div>
  );
};

export default ShowCase;
