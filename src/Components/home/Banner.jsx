import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section
      className="overflow-hidden min-h-[70vh] md:min-h-[80vh] flex flex-col justify-center items-center
  bg-linear-to-br from-[#07111F] via-[#0F172A] to-[#111827]
  mt-5 mb-15 px-5 md:px-10 rounded-2xl"
    >
      <div
        className="flex flex-col md:flex-row gap-10 items-center
            relative"
      >
        {/* Blur Glow Top */}
        <div className="absolute -top-40 -left-40 size-80 rounded-full bg-cyan-700/20 blur-3xl" />

        {/* left side content */}
        <div className="flex-1 space-y-5">
          <h1 className="text-4xl md:text-6xl font-bold">Discover Your <span className="text-[#22D3EE]">Ideal</span> Study Space</h1>
          <p className="text-[#94A3B8] text-lg">
            Discover peaceful study spaces designed for focus, collaboration, and productive learning—all in one place.
          </p>

          <Link href={"/all-rooms"} className="relative">
            <Button
              className=" rounded-lg
                        bg-[#22D3EE] hover:bg-[#06B6D4] text-[#07111F]"
            >
              Explore Rooms
            </Button>
          </Link>
        </div>

        {/* right side image */}
        <div className="w-full md:flex-1 relative h-[350px] md:h-[450px]">
          <Image
            src="/study-room-banner.jpg"
            alt="study-room-banner"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
