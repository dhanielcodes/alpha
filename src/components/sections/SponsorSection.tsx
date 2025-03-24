import React from "react";
import Image from "next/image";
import Marquee from "../bits/Marquee";

const SponsorSection: React.FC = () => {
  return (
    <div className=" max-w-main mx-auto justify-between my-10 lg:space-x-24 lg:space-y-0 space-y-10">
      <p className="text-tertiary text-lg text-center font-medium my-2">
        Join 4,000+ companies already growing
      </p>

      <Marquee>
        <div className="w-full flex justify-between items-center w-full space-x-40">
          <Image
            alt="sponsor"
            width={150}
            height={150}
            src="/sponsors/layers.png"
          />
          <Image
            alt="sponsor"
            width={150}
            height={150}
            src="/sponsors/sisyphus.png"
          />{" "}
          <Image
            alt="sponsor"
            width={150}
            height={150}
            src="/sponsors/circooles.png"
          />
          <Image
            alt="sponsor"
            width={150}
            height={150}
            src="/sponsors/catalog.png"
          />
          <Image
            alt="sponsor"
            width={150}
            height={150}
            src="/sponsors/quotie.png"
          />
        </div>
      </Marquee>
    </div>
  );
};

export default SponsorSection;
