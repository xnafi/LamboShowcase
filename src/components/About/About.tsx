import React, { useEffect, useState } from "react";

export default function About({ scrollYProgress }: any) {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const handleScrollProgress = (latest: number) => {
      setProgress(latest);
    };

    // Subscribe to scrollYProgress changes
    const unsubscribe = scrollYProgress.on("change", handleScrollProgress);

    // Clean up subscription on unmount
    return () => {
      unsubscribe();
    };
  }, [scrollYProgress]);

  return (
    <div className="h-screen w-full md:max-w-[1400px] mx-auto md:px-10 px-2 mt-20">
      <h1 className="text-5xl text-white">about</h1>
    </div>
  );
}
