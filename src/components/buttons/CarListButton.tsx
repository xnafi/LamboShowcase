import Link from "next/link";

function CarListButton({ href }: any) {
  const handleCarList = () => {
    // Your logic here
  };

  return (
    <Link
      href={href}
      onClick={handleCarList}
      className="font-quantico buttonPrimary"
    >
      CHOOSE YOUR BEAST
    </Link>
  );
}

export default CarListButton;
