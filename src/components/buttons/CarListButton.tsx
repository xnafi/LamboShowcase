function CarListButton({ handleCarList }: any) {
  return (
    <button
      type="button"
      onClick={handleCarList}
      className="font-quantico group relative overflow-hidden rounded-lg border-[1px] p-2 text-xl md:text-2xl mt-2"
    >
      CHOOSE YOUR BEAST
    </button>
  );
}

export default CarListButton;
