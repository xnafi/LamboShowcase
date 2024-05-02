import ShowCaseItems from "./ShowCaseItems";

const ShowCase = () => {
  return (
    <div className="grid w-full place-content-center bg-gradient-to-br px-4 text-slate-900 place-items-center">
      <div className="flex gap-x-3 md:gap-x-4">
        <h1 className="headings text-yellow-600 mb-10">SPEEDING</h1>
        <h1 className="headings text-yellow-600 mb-10"> BEASTS</h1>
      </div>
      <ShowCaseItems />
    </div>
  );
};

export default ShowCase;
