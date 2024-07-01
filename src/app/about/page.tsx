/* eslint-disable react/no-unescaped-entities */
// pages/about.tsx (assuming TypeScript)
import Image from "next/image";
import aboutImage from "../../assets/banner/shubham-sharan-6NqEMk91ayU-unsplash.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center justify-center">
      <div className="w-full mx-auto px-2 bg-transparent shadow-lg rounded-lg">
        <div className="relative h-96 mb-8 w-full">
          <Image
            src={aboutImage}
            alt="About Us"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            quality={100}
            className="rounded-t-lg"
          />
        </div>
        <div className="text-center w-full mx-auto  text-balance">
          <h1 className="sub-heading !font-bold !text-white mb-4">About Us</h1>
          <p className="text-lg text-white leading-relaxed">
            At Lambo Showcase, we are passionate about delivering exceptional
            automotive experiences. Our journey began with a simple yet
            ambitious goal: to redefine luxury and performance in the automotive
            industry. Today, we stand proud as a symbol of innovation,
            craftsmanship, and uncompromising quality.
          </p>
          <p className="text-lg text-white leading-relaxed mt-4">
            Founded on the principles of precision engineering and visionary
            design, Lambo Showcase has evolved into a trusted name among
            enthusiasts and collectors alike. Every vehicle we showcase embodies
            the spirit of innovation and reflects our commitment to pushing
            boundaries.
          </p>
          <p className="text-lg text-white leading-relaxed mt-4">
            Our team consists of dedicated professionals who share a common
            passion for excellence. From concept to creation, we meticulously
            curate each vehicle to ensure it exceeds expectations and leaves a
            lasting impression. Whether you're a seasoned enthusiast or
            discovering our brand for the first time, we invite you to explore
            the world of Lambo Showcase and experience automotive excellence
            like never before.
          </p>
          <p className="text-lg text-white leading-relaxed mt-4">
            Join us on this exhilarating journey as we continue to innovate,
            inspire, and set new standards in automotive craftsmanship. Lambo
            Showcase is more than just a brand it's a testament to the art of
            engineering and the pursuit of perfection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
