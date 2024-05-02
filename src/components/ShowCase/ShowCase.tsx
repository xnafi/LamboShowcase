import ShowCaseItems from "./ShowCaseItems";

const ShowCase = () => {
  return (
    <div className="grid w-full place-content-center bg-gradient-to-br px-4 text-slate-900 place-items-center">
      <h1 className="headings text-yellow-600 mb-10">SPEEDING BEASTS</h1>
      <ShowCaseItems />
    </div>
  );
};

export default ShowCase;
