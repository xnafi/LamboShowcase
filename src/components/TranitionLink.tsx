"use client";
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/animations";
import Link from "next/link";

interface Props {
  href: string;
  label: string;
}

const TransitionLink = ({ href, label }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };

  return (
    <button
      className="hover:text-yellow-500 hover:transition-all hover:duration-300 hover:ease-in"
      onClick={handleClick}
    >
      <Link href={href} className="hover:text-yellow-500 !p-0">
        {label}
      </Link>
    </button>
  );
};

export default TransitionLink;
