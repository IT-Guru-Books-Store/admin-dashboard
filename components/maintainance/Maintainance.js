import Image from "next/image";
import ImgToShow from "../../resources/images/under-construction.png";
import { Typography } from "../material_tailwind_components/MaterialTailwindComponents";

import React from "react";

const Maintainance = () => {
  return (
    <div className="flex items-center h-full w-full justify-center">
      <Image
        className=" object-cover object-center"
        src={ImgToShow}
        alt="nature image"
        width={400}
        height={400}
      />
    </div>
  );
};

export default Maintainance;
