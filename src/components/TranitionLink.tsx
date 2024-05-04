"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { animatePageOut } from "@/app/utils/animation";

interface Props {
  href: string;
  label: string;
}

const TransitionLink = ({ href, label }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      return animatePageOut(href, router);
    }
  };

  return (
    <button
      className="hover:text-yellow-500 hover:transition-all hover:duration-300 hover:ease-in"
      onClick={handleClick}
    >
      <Link href={href} className="hover:text-yellow-500 !p-0 uppercase">
        {label}
      </Link>
    </button>
  );
};

export default TransitionLink;
