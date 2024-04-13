import React from "react";
import {
  Typography,
  Chip,
} from "../../components/material_tailwind_components/MaterialTailwindComponents";
import CardDefault from "@/components/cards/CardDefault";
import { FEATURES } from "@/constants/constant";

const page = () => {
  return (
    <div className="bg-black p-8 rounded-md">
      <div className="flex gap-1">
        <Typography variant="h5" color="white">
          All Our Features
        </Typography>
        <Chip color="red" value="New" />
      </div>
      <div className="mt-10 flex flex-wrap gap-6 justify-center">
        {FEATURES.map((feature) => (
          <CardDefault
            key={feature.key}
            img={feature.img}
            title={feature.title}
            description={feature.description}
            link={feature.link}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
