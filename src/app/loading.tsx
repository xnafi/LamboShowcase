
const loading = () => {
  return (
    <div>
      <CutoutTextLoader
        height="450px"
        background="white"
        // NOTE: Using GIFs for the background looks super cool :)
        imgUrl="../assets/banner/david-von-diemar-_j2bDuQVEO8-unsplash.jpg"
      />
    </div>
  );
};
interface IEimage {
  height: string;
  background: string;
  imgUrl: string;
}
const CutoutTextLoader = ({ height, background, imgUrl }: IEimage) => {
  return (
    <div className="relative" style={{ height }}>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div
        style={{ background }}
        className="absolute inset-0 animate-pulse z-10"
      />
      <span
        className="font-black absolute inset-0 z-20 text-center bg-clip-text text-transparent pointer-events-none bg-white"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          fontSize: "clamp(3rem, 12vw, 10rem)",
          lineHeight: height,
        }}
      >
        Loading...
      </span>
    </div>
  );
};

export default loading;
